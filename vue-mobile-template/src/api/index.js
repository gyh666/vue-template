const api = {};
const apiFiles = require.context("./modules/", true, /\.js$/);
apiFiles.keys().forEach(fileName => {
  const apiName = fileName.replace(/^\.\//, "").replace(/\.js$/, "");
  api[apiName] = apiFiles(fileName);
});

export default api;
