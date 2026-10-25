import { readFile, writeFile } from 'node:fs/promises';
import { randomBytes } from 'node:crypto';
import { createInterface } from 'node:readline/promises';
import { Writable } from 'node:stream';
import path from 'node:path';

const filename = path.resolve('.env.local');
let existing = '';
try { existing = await readFile(filename, 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
if (/^\s*MEDIA_(?:STORAGE_DIR|ADMIN_PASSWORD(?:_B64)?|SESSION_SECRET)\s*=/m.test(existing)) {
  console.error('.env.local에 미디어 설정이 이미 있습니다. 기존 값을 직접 수정하세요.');
  process.exit(1);
}
let hidden = false;
const output = new Writable({ write(chunk, encoding, callback) { if (!hidden) process.stdout.write(chunk, encoding); callback(); } });
const rl = createInterface({ input: process.stdin, output, terminal: process.stdin.isTTY });
try {
  const directory = (await rl.question('사진·영상을 저장할 별도 폴더의 절대경로: ')).trim();
  const relative = path.relative(process.cwd(), directory);
  if (!path.isAbsolute(directory) || !relative || (!relative.startsWith(`..${path.sep}`) && relative !== '..' && !path.isAbsolute(relative))) throw new Error('프로젝트 밖의 폴더 절대경로를 입력하세요.');
  process.stdout.write('관리자 비밀번호 (12자 이상, 화면에 표시되지 않음): ');
  hidden = true;
  const password = await rl.question('');
  hidden = false; process.stdout.write('\n');
  if (password.length < 12 || /[\r\n\0]/.test(password)) throw new Error('비밀번호는 줄바꿈 없이 12자 이상이어야 합니다.');
  const quote = value => JSON.stringify(value.replaceAll('\\', '/')).replaceAll('$', '\\$');
  const additions = `\nMEDIA_STORAGE_DIR=${quote(path.resolve(directory))}\nMEDIA_ADMIN_PASSWORD_B64=${Buffer.from(password, 'utf8').toString('base64')}\nMEDIA_SESSION_SECRET=${randomBytes(32).toString('base64url')}\nMEDIA_PUBLIC_ORIGIN=\n`;
  await writeFile(filename, existing + additions, { mode: 0o600 });
  console.log('설정을 .env.local에 저장했습니다. 서버를 다시 실행하고 /admin/assets/에서 로그인하세요.');
} catch (error) { hidden = false; console.error(error.message); process.exitCode = 1; }
finally { rl.close(); }
