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


// Read Files，创建一个读取HTML文件的Node.js文件，并返回内容
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data); //data是什么？
//     res.end();
//   });
// }).listen(3000);


// Create Files

// fs.appendFile(), 将指定的内容附加到文件。如果文件不存在，将创建该文件
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello Kathy!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// demo for fs.appendFile()
// var fs = require('fs');
// fs.appendFile('newText.txt', 'I am Kathy!',function(err) {
//   if (err) throw err;
//   console.log('Bingo!');
// });

// fs.open(), 将“flag”作为第二个参数，如果标志为“w”表示“写入”，则打开指定的文件进行写入。如果该文件不存在，则创建一个空文件
// what is "flag"?
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// fs.open('mynewfile2.txt', 'r', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// demo for fs.open()
// var fs = require('fs');
// fs.open('newText1.txt', 'w', function(err) {
//   if (err) throw err;
//   console.log('Bingo!');
// });

// fs.writeFile()用于替换指定的文件和内容（如果存在）。如果该文件不存在，将创建包含指定内容的新文件
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello Moonpie!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// demo for fs.writeFile()
var fs = require('fs');
fs.writeFile('newText2.txt', 'Hello Jim!', function(err) {
  if (err) throw err;
  console.log('Bingo!');
});