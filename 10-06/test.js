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
// var http = require('http');
// var url = require('url'); //URL模块可将查询字符串拆分为可读部分

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query; //拆分并分别取值
//   // var q = url.parse(req.url, false).query;
//   console.log(req.url); //取url后面的字符串(如localhost:3000/?s=apple中，则req.url取"/?s=apple")
//   console.log("----------");
//   // console.log(parse(req.url));
//   console.log(url.parse(req.url, true));
//   // console.log(url.parse(req.url, false));
//   console.log("----------");
//   console.log(q);
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(3000);

// demo for split the query string:
// var http = require('http');
// var url = require('url');

// http.createServer(function(req, res) {
//   res.writeHead(200, {'content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.a + ' ' + q.b;
//   res.end(txt);
// }).listen(3000)


//Read Files
