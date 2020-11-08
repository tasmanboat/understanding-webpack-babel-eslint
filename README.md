# understanding-webpack-babel-eslint

### understanding-webpack-babel
```
npm init -y
npm install --save-dev webpack webpack-cli  webpack-dev-server

CSS 插件
npm install --save-dev style-loader css-loader
静态文件插件
npm install --save-dev copy-webpack-plugin
JS BABEL 插件（支持 VUE.JS 和 REACT.JS ）
npm install --save-dev babel-loader @babel/core @babel/preset-env
参考
https://webpack.js.org/loaders/babel-loader/

构建插件
npm install --save-dev html-webpack-plugin clean-webpack-plugin

配置文件
package.json
webpack.config.js
babel.config.json

项目依赖
npm install --save lodash
npm install

项目依赖（VUE.JS 或 REACT.JS）
npm install --save react react-dom
npm install --save react react-dom react-router-dom react-router-dom react-redux
npm install
参考
https://www.cnblogs.com/lsgxeva/p/8004394.html
https://juejin.im/post/6844903904040189960#flooks

其它依赖
npm install --save-dev @babel/preset-react react-hot-loader
参考
https://www.robinwieruch.de/minimal-react-webpack-babel-setup


学习区
babel 的配置文件，推荐用 babel.config.json （而不是 .babelrc ）
https://babeljs.io/docs/en/config-files


```

### understanding-webpack-babel-eslint
```
ESLINT 插件
npm install --save-dev eslint
npx eslint --init （To chech syntax and find problems; JS modules import export; React framework;  ）
// 按要求安装 eslint-plugin-react

配置文件
package.json
webpack.config.js
babel.config.json
.eslintrc.js


学习区
eslint 支持单独使用： npx eslint yourfile.js
https://eslint.org/docs/user-guide/getting-started

学习区
ignore the rule for a line is js/jsx 例子

error_trigger(){
  bibi = 12; // eslint-disable-line no-undef
  let a2 = 223;
  a2 = 333; // eslint-disable-line no-unused-vars
}

```
