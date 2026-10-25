import { createServer } from 'node:http';
import { Readable } from 'node:stream';
import next from 'next';
import nextEnv from '@next/env';
import { createMediaService } from '../server/media-service.mjs';

const args = process.argv.slice(2);
const dev = args.includes('--dev');
const option = (name, fallback) => args.includes(name) ? args[args.indexOf(name) + 1] : fallback;
nextEnv.loadEnvConfig(process.cwd(), dev);
const hostname = option('--hostname', process.env.HOST || '127.0.0.1');
const port = Number(option('--port', process.env.PORT || '3000'));
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid port');
const origin = process.env.MEDIA_PUBLIC_ORIGIN || '';
const media = createMediaService({
  directory: process.env.MEDIA_STORAGE_DIR,
  password: process.env.MEDIA_ADMIN_PASSWORD_B64 ? Buffer.from(process.env.MEDIA_ADMIN_PASSWORD_B64, 'base64').toString('utf8') : process.env.MEDIA_ADMIN_PASSWORD,
  secret: process.env.MEDIA_SESSION_SECRET,
  publicOrigin: origin,
  secureCookies: origin.startsWith('https://'),
});
const app = next({ dev, hostname, port });
await app.prepare();
const handle = app.getRequestHandler();
const server = createServer(async (req, res) => {
  try {
    if (!req.url?.startsWith('/api/media/')) return await handle(req, res);
    const request = new Request(new URL(req.url, origin || `http://${hostname}:${port}`), {
      method: req.method,
      headers: req.headers,
      ...(!['GET', 'HEAD'].includes(req.method) ? { body: Readable.toWeb(req), duplex: 'half' } : {}),
    });
    const response = await media.handle(request, { remoteAddress: req.socket.remoteAddress });
    res.writeHead(response.status, Object.fromEntries(response.headers));
    if (response.body) Readable.fromWeb(response.body).pipe(res);
    else res.end();
  } catch (error) {
    console.error('Request failed:', error.code || error.name);
    if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: '요청을 처리하지 못했습니다.' }));
  }
});
server.requestTimeout = 120_000;
server.listen(port, hostname, () => console.log(`Ready: http://${hostname}:${port}`));
const stop = () => { server.close(() => process.exit(0)); setTimeout(() => process.exit(1), 5000).unref(); };
process.once('SIGINT', stop);
process.once('SIGTERM', stop);
