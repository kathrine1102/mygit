// Include Modules
// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(3000);


// Include Your Own Module
// var http = require('http'); //include a module. 应用程序可以访问HTTP模块，并且能够创建服务器
// var dt = require('./module'); // './' 用于定位模块，这意味着该模块与Node.js文件位于同一文件夹中

// // var iconv = require('iconv-lite');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     //尝试解决中文乱码问题 , {'encoding': 'binary'}, function(err, data){ if(err) throw error;var str = iconv.decode(data, 'gbk');console.log(str);}
//     res.write("The date and time are currently: " + dt.myDateTime());
//     res.end();
// }).listen(3000);


// The Built-in HTTP Module. Node.js as a Web Server
// var http = require('http');

// //create a server object(应用程序可以创建http服务器，该服务器侦听服务器端口并将响应返回给客户端)
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(3000); //the server object listens on port 3000


//Add an HTTP Header
// var http = require('http'); //如果HTTP服务器的响应应该显示为HTML，则应包含具有正确内容类型的HTTP标头：
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'}); //第一个参数是状态代码，200表示一切正常，第二个参数是包含响应标头的对象
//   res.write('Hello World!');
//   res.end();
// }).listen(3000);


// Read the Query String
// var http = require('http');
// http.createServer(function (req, res) {  //req参数表示来自客户端的请求，作为对象，该对象有一个名为“url”的属性，它保存域名后面的url部分('/'之后的部分)
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(3000);

// demo for read the query string:
// const express = require("express");
// const app = express();

// app.get('/', function(req, res){
//     var a = req.query.s;
//     res.send(a);
// })

// app.listen(3000);


// Split the Query String
var http = require('http');
var url = require('url'); //URL模块可将查询字符串拆分为可读部分

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; //拆分并分别取值
  console.log(req.url);
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(3000);