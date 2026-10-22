const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

if (!app.requestSingleInstanceLock()) app.quit(); // one window only, so two copies never fight over the database

function createWindow() {
  const win = new BrowserWindow({
    width: 1200, height: 820, minWidth: 420, minHeight: 600,
    backgroundColor: '#FFFEFC', autoHideMenuBar: true,
    icon: path.join(__dirname, 'web', 'icons', 'icon-512.png'),
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  win.loadFile(path.join(__dirname, 'web', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(createWindow);
app.on('second-instance', () => { const w = BrowserWindow.getAllWindows()[0]; if (w) { if (w.isMinimized()) w.restore(); w.focus(); } });
app.on('window-all-closed', () => app.quit());
