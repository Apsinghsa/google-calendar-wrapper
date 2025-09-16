const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        icon: path.join(__dirname, 'assets', 'icon.png'),
    });

    // Load the Google Calendar URL
    win.loadURL('https://calendar.google.com');

    // Optional: Add other features
    // For example, to open DevTools:
    // win.webContents.openDevTools();
}

// Remove the default application menu.
// This must be done before the app is ready and the window is created.
Menu.setApplicationMenu(null);

app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});