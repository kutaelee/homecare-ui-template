import {readFileSync,readdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
const files=[];
function walk(dir){if(!existsSync(dir))return;for(const e of readdirSync(dir,{withFileTypes:true})){const p=join(dir,e.name);if(e.isDirectory())walk(p);else if(/\.(tsx?|jsx?|css|json)$/.test(p))files.push(p)}}
walk('src');const issues=[];
const forbidden=[/집요한케어/i,/zipyohan[-_]?care/i,/kkalkkom_homecare/i,/blog\.naver\.com/i,/open\.kakao\.com/i,/(?:AKIA|ASIA)[A-Z0-9]{16}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}/,/\bgh[pousr]_[A-Za-z0-9_]{20,}/];
for(const p of files){const s=readFileSync(p,'utf8');for(const pat of forbidden)if(pat.test(s))issues.push(p+': '+pat);if(/[가-힣]/.test(s))issues.push(p+': untranslated Korean content');}
for(const p of ['src/components/JapaneseSite.tsx','src/components/JapaneseAdmin.tsx','src/data/japanese.ts','src/app/[[...path]]/page.tsx','src/app/layout.tsx','LICENSE'])if(!existsSync(p))issues.push('Missing '+p);
if(issues.length){console.error(issues.join('\n'));process.exit(1)}console.log('Japanese public checks passed: '+files.length+' files.');
