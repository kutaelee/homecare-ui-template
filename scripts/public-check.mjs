import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const scanDirs=['src','public'];
const textExtensions=new Set(['.ts','.tsx','.js','.mjs','.json','.svg','.css','.md','.html']);
// Source-only checks: reject private brand traces and real external blog/chat integrations.
// `docs/` is intentionally excluded because it contains narrative disclosure and screenshots.
const banned=[
 /집요한케어/g,/zipyohan/gi,/kutaelee/gi,/gyuforge/gi,
 /(?:rss\.)?blog\.naver\.com/gi,/open\.kakao\.com/gi,
 /https?:\/\/(?:www\.)?instagram\.com\//i,
 /\b(?:tel|sms):/i,
 /sk[-_]?live[-_]/i,/\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/g,
 /gh[pousr]_[A-Za-z0-9_]{20,}/,/github_pat_[A-Za-z0-9_]{20,}/,
 /AIza[0-9A-Za-z_-]{35}/,
 /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/
];
const findings=[];
function walk(dir){if(!fs.existsSync(dir))return;for(const item of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory()){walk(p);continue;}if(!textExtensions.has(path.extname(p)))continue;const s=fs.readFileSync(p,'utf8');for(const rule of banned)if(rule.test(s))findings.push(`${path.relative(root,p)}: pattern ${rule}`);}}
for(const dir of scanDirs)walk(path.join(root,dir));
const files=[];function collect(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())collect(p);else files.push(path.relative(root,p).replace(/\\/g,'/'));}}collect(path.join(root,'src/app'));
const required=['page.tsx','services/page.tsx','services/[slug]/page.tsx','cases/page.tsx','cases/[id]/page.tsx','faq/page.tsx','contact/page.tsx','reservation/page.tsx','inquiry/new/page.tsx','qna/page.tsx','qna/new/page.tsx','login/page.tsx','signup/page.tsx','mypage/page.tsx','admin/page.tsx','admin/[section]/page.tsx'];
for(const r of required)if(!files.includes('src/app/'+r))findings.push('missing route '+r);
const demo=fs.readFileSync(path.join(root,'src/data/demo.ts'),'utf8');if(!demo.includes('가상'))findings.push('Sample declaration missing');
if(findings.length){console.error('PUBLIC CHECK FAILED\n'+findings.join('\n'));process.exit(1)}
console.log(`PUBLIC CHECK OK — ${files.length} app files, ${required.length} required route templates, no blocked markers detected. This is not a full security audit.`);
