const {app, BrowserWindow, webContents} = require('electron');

let window;

function createWindow(){

    window = new BrowserWindow({
        width: 1500,
        height: 900,
        icon: 'app/images/icon.png',
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('app/html/index.html');
    // window.removeMenu();

    window.on('ready-to-show', function(){
        window.show();
        window.focus();
    });
}

app.on('windows-all-closed', function(){
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('ready', function(){
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow();
    }
});