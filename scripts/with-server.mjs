// Serve dist/ with `astro preview`, run a command against it, then stop the server.
import { spawn } from 'node:child_process';

const [cmd, ...args] = process.argv.slice(2);
const server = spawn('npx', ['astro', 'preview', '--port', '4321'], { stdio: 'ignore', shell: true });

const ready = async () => {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch('http://localhost:4321/');
      if (res.ok) return;
    } catch {
      /* server not up yet */
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('preview server did not start');
};

let code = 1;
try {
  await ready();
  code = await new Promise((resolve) => {
    spawn(cmd, args, { stdio: 'inherit', shell: true }).on('exit', (c) => resolve(c ?? 1));
  });
} finally {
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/t', '/f'], { stdio: 'ignore' });
  else server.kill();
}
process.exit(code);
