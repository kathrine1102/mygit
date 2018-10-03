var fs = require('fs');

fs.readFile('/path', function(err, file) {
    console.log('读取文件完成');
});
console.log('发起读取文件');

fs.readFile('/path1', function(err, file) {
    console.log('读取文件1完成');
});

fs.readFile('/path2', function(err, file) {
    console.log('读取文件2完成');
});