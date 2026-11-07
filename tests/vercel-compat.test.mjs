import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('Vercel build path does not force Cloudflare output', async () => {
  const vite = await read('vite.config.ts');
  assert.match(vite, /process\.env\.VERCEL/);
  assert.match(vite, /isVercel/);
  assert.match(vite, /if \(!isVercel\)/);
});

test('Vercel configuration targets vinext Nitro output', async () => {
  const config = JSON.parse(await read('vercel.json'));
  assert.equal(config.framework, null);
  assert.equal(config.buildCommand, 'vite build');
  assert.equal(config.outputDirectory, '.output');
});

test('enquiry persistence uses a serverless Postgres URL instead of Cloudflare-only bindings', async () => {
  const enquiries = await read('db/enquiries.ts');
  assert.match(enquiries, /@neondatabase\/serverless/);
  assert.match(enquiries, /process\.env\.DATABASE_URL/);
  assert.doesNotMatch(enquiries, /cloudflare:workers/);
});
