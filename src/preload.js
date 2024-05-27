// preload.js
const { ipcRenderer, contextBridge } = require('electron');

// Добавляем ipcRenderer в контекст окна для обеспечения безопасного взаимодействия между процессами
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
