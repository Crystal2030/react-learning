#安装
npm install webpack webpack-dev-server babel babel-preset-es2015 babel-preset-react babelify react react-dom --save
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