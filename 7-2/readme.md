#安装
npm install webpack webpack-dev-server babel-preset-es2015 babel-preset-react babelify react react-dom --save
npm webpack webpack-dev-server -g

Chrome extensions: 
React developer Tools

webpack许多配置项的路径预期都是绝对路径。__dirname+"/app/folder" 这样写是错的，因为windows用 反斜杠切分路径。这样容易出问题。 
使用正确的分隔符例如path.resolve(__dirname, "app/folder") 或者 path.join(__dirname, "app", "folder")。


#监测代码修改
webpack --watch  不能自动刷新
webpack-dev-server  这个要自动刷新得在当前链接上带上webpack-dev-server， http://localhost:8080:webpack-dev-server
下面这个命令不需要加webpack-dev-server尾巴
webpack-dev-server --content-base src --inline --hot

目前我们写 javascript 代码时，需要使用 N 个 preset，比如：babel-preset-es2015、babel-preset-es2016。es2015 可以把 ES6 代码编译为 ES5，es2016 可以把 ES2016 代码编译为 ES6。babel-preset-latest 可以编译 stage 4 进度的 ECMAScript 代码。

问题是我们几乎每个项目中都使用了非常多的 preset，包括不必要的。例如很多浏览器支持 ES6 的 generator，如果我们使用 babel-preset-es2015 的话，generator 函数就会被编译成 ES5 代码。

babel-preset-env 的工作方式类似 babel-preset-latest，唯一不同的就是 babel-preset-env 会根据配置的 env 只编译那些还不支持的特性。

#npm install --save react-mixin
#安装style-loader css-loader 进行样式模块化
 > npm install babel-plugin-react-html-attrs style-loader css-loader --save
 > babel-plugin-react-html-attrs   Transforms JSX class attributes into className and for attributes into htmlFor, 安装之后就可以把className改成class写了 <header style={styleComponentHeader.header} className="smallFontSize">


#安装antd插件
 >npm install antd --save