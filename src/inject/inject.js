function injectScript(file_path, node) {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", file_path);
  node.appendChild(script);
}

const body = document.getElementsByTagName("body")[0];
injectScript(chrome.extension.getURL("js/plugin.js"), body);
