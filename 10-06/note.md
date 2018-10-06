<h3>code

	var http = require('http');
	var url = require('url'); //URL模块可将查询字符串拆分为可读部分
	
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  var q = url.parse(req.url, true).query; //拆分并分别取值
	  console.log(req.url);
	  console.log("----------------------------------------");
	  // console.log(parse(req.url)); //报错
	  console.log(url.parse(req.url, true));
	  console.log("----------------------------------------");
	  console.log(q);
	  var txt = q.year + " " + q.month;
	  res.end(txt);
	}).listen(3000);

<h3>console.log:

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
