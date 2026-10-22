// Copies the web app (one folder up) into ./web so electron-builder can package it.
const fs = require('fs'), path = require('path');
const out = path.join(__dirname, 'web');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(path.join(__dirname, '..', 'index.html'), path.join(out, 'index.html'));
fs.cpSync(path.join(__dirname, '..', 'icons'), path.join(out, 'icons'), { recursive: true });
fs.cpSync(path.join(__dirname, '..', 'lib'), path.join(out, 'lib'), { recursive: true });
