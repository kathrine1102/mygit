<h3>var q = url.parse(req.url, true).query;</h3>
<h3>console.log(url.parse(req.url, true));</h3>
>code

	var http = require('http');
	var url = require('url'); //URL模块可将查询字符串拆分为可读部分
	
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  var q = url.parse(req.url, true).query; //拆分并分别取值 //true
	  console.log(req.url); //取url后面的字符串(如localhost:3000/?s=apple中，则req.url取"/?s=apple")
	  console.log("----------------------------------------");
	  // console.log(parse(req.url)); //报错
	  console.log(url.parse(req.url, true)); //true
	  console.log("----------------------------------------");
	  console.log(q);
	  var txt = q.year + " " + q.month;
	  res.end(txt);
	}).listen(3000);

>console.log

	/?year=2018&month=10
	----------------------------------------
	Url {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?year=2018&month=10',
	  query: { year: '2018', month: '10' },
	  pathname: '/',
	  path: '/?year=2018&month=10',
	  href: '/?year=2018&month=10' }
	----------------------------------------
	{ year: '2018', month: '10' }

>网页输出：2018 10

<h3>var q = url.parse(req.url, false).query;</h3>
<h3>console.log(url.parse(req.url, false));</h3>
>code
	var http = require('http');
	var url = require('url'); //URL模块可将查询字符串拆分为可读部分
	
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});	
	  var q = url.parse(req.url, false).query; //拆分并分别取值 //false
	  console.log(req.url); //取url后面的字符串(如localhost:3000/?s=apple中，则req.url取"/?s=apple")
	  console.log("----------");
	  console.log(url.parse(req.url, false)); //false
	  console.log("----------");
	  console.log(q);
	  var txt = q.year + " " + q.month;
	  res.end(txt);
	}).listen(3000);

>console.log

	/?year=2018&month=10
	----------
	Url {
	  protocol: null,
	  slashes: null,
	  auth: null,
	  host: null,
	  port: null,
	  hostname: null,
	  hash: null,
	  search: '?year=2018&month=10',
	  query: 'year=2018&month=10',
	  pathname: '/',
	  path: '/?year=2018&month=10',
	  href: '/?year=2018&month=10' }
	----------
	year=2018&month=10

>网页输出：undefined undefined

<h3>便于理解：</h3>
* true和false的区别在于最后显示在控制台的是一个“对象”还是一个“未解析、未解码的字符串”
* 以及这也决定了写“true”时输出在页面的res.end(txt)显示为解析后的可读字符串，而写“false”时会显示为undefined