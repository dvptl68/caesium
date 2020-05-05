const {app, BrowserWindow} = require('electron');

function createWindow(){

    const window = new BrowserWindow({
        width: 1500,
        height: 900,
        icon: 'images/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('html/index.html');
    window.removeMenu();
}

app.whenReady().then(createWindow);

app.on('windows-all-closed', function(){
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});