import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
async function source(path) { return readFile(new URL(path, root), 'utf8'); }

test('shared military-luxury structure is defined centrally', async () => {
  const css = await source('app/globals.css');
  for (const selector of ['.mark-section','.mark-anchor-grid','.mark-anchor','.mark-progression','.mark-module','.mark-module-number']) {
    assert.match(css, new RegExp(selector.replace('.', '\\.')));
  }
  assert.match(css, /--mark-surface:\s*#171b1e/i);
  assert.match(css, /--mark-surface-elevated:\s*#191d20/i);
});

test('service record preserves existing content and becomes anchor plus dossier', async () => {
  const text = await source('components/sections/ServiceRecord.tsx');
  assert.match(text, /service-record-luxury/);
  assert.match(text, /service-dossier/);
  assert.match(text, /mark-anchor-grid/);
  assert.match(text, /profileRows\.map/);
  assert.doesNotMatch(text, /experience-aerospace\.jpg|<img/i);
});

test('capabilities keeps data-driven content in a structured progression', async () => {
  const text = await source('components/sections/Capabilities.tsx');
  assert.match(text, /capabilities-luxury/);
  assert.match(text, /mark-progression/);
  assert.match(text, /mark-module/);
  assert.match(text, /capabilityItems\.map/);
});

test('operating experience uses one image anchor and keeps its data progression', async () => {
  const text = await source('components/sections/Experience.tsx');
  assert.match(text, /experience-luxury/);
  assert.match(text, /experience-aerospace\.jpg/);
  assert.match(text, /experienceItems\.map/);
  assert.match(text, /mark-progression/);
});

test('operating principles uses a statement anchor and data-driven modules', async () => {
  const text = await source('components/sections/OperatingPrinciples.tsx');
  assert.match(text, /principles-luxury/);
  assert.match(text, /mark-anchor-grid/);
  assert.match(text, /principles\.map/);
  assert.match(text, /mark-module/);
});

test('contact preserves existing form behavior while using the shared composition', async () => {
  const contact = await source('components/sections/Contact.tsx');
  const form = await source('components/ui/ContactForm.tsx');
  assert.match(contact, /contact-luxury/);
  assert.match(contact, /ContactForm/);
  assert.match(form, /fetch\("\/api\/enquiries"/);
  assert.match(form, /referenceNumber/);
});
