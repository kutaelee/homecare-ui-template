/** Offline structure sanity checks; NOT a Next.js build or runtime E2E test. */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
let ts; try { ts=require('typescript'); } catch { console.error('Install dependencies with npm install to run this check.'); process.exit(2); }
const root=path.resolve(import.meta.dirname,'..');let files=0,errors=[];
function walk(dir){for(const d of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,d.name);if(d.isDirectory())walk(f);else if(/\.tsx?$/.test(f)){
 files++;const source=fs.readFileSync(f,'utf8');const out=ts.transpileModule(source,{fileName:f,reportDiagnostics:true,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ESNext}});
 for(const e of out.diagnostics||[])if(e.category===1)errors.push(`${f}: ${ts.flattenDiagnosticMessageText(e.messageText,' ')}`);
 const aliases=[...source.matchAll(/from ['"]@\/([^'"]+)['"]/g)].map(m=>m[1]);for(const a of aliases){let base=path.join(root,'src',a);if(![base,base+'.tsx',base+'.ts',path.join(base,'index.tsx'),path.join(base,'index.ts')].some(p=>fs.existsSync(p)))errors.push(`${path.relative(root,f)} unresolved @/${a}`)}
 const assets=[...source.matchAll(/(?:src|href)=['"](\/illustrations\/[^'"]+)['"]/g)].map(m=>m[1]);for(const a of assets)if(!fs.existsSync(path.join(root,'public',a.slice(1))))errors.push(`${path.relative(root,f)} missing ${a}`)
}}}walk(path.join(root,'src'));
if(errors.length){console.error(errors.join('\n'));process.exit(1)}console.log(`Syntax/import/asset sanity: PASS (${files} TS/TSX files). No runtime or full type checking executed.`);
