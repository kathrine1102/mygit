// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(3000);


// var http = require('http'); //include a module. 应用程序可以访问HTTP模块，并且能够创建服务器
// var dt = require('./module'); // './' 用于定位模块，这意味着该模块与Node.js文件位于同一文件夹中

// // var iconv = require('iconv-lite');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     //尝试解决中文乱码问题 , {'encoding': 'binary'}, function(err, data){ if(err) throw error;var str = iconv.decode(data, 'gbk');console.log(str);}
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(3000);


// var http = require('http');

// //create a server object(应用程序可以创建http服务器，该服务器侦听服务器端口并将响应返回给客户端)
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(3000); //the server object listens on port 3000


var http = require('http'); //如果HTTP服务器的响应应该显示为HTML，则应包含具有正确内容类型的HTTP标头：
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'}); //第一个参数是状态代码，200表示一切正常，第二个参数是包含响应标头的对象
  res.write('Hello World!');
  res.end();
}).listen(3000);