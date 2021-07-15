const {
    override,
    fixBabelImports,
   addLessLoader,
  } = require("customize-cra");
  
    /* 把大包的build文件夹名称改成prod-bigscreen-web*/
    const path = require('path')
    const paths = require('react-scripts/config/paths')
    paths.appBuild = path.join(path.dirname(paths.appBuild), 'reactAdmin')

  module.exports = override(
    fixBabelImports("import", {
      libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
   addLessLoader({
      javascriptEnabled: true,
       modifyVars: { "@primary-color": "#1DA57A" }
   })
  );