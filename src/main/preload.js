const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadProjectList: () => ipcRenderer.invoke("get-project-list"),
  deleteProjectList: projectName =>
    ipcRenderer.invoke("delete-project-list", projectName),
  selectFolder: () => ipcRenderer.invoke("setting-path"),
  readDirectory: folderPath => ipcRenderer.invoke("read-directory", folderPath),
  installProject: projectData =>
    ipcRenderer.invoke("install-project", projectData),
  installDependencies: dependencyData =>
    ipcRenderer.invoke("install-dependencies", dependencyData)
});
