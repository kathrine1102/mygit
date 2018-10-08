// Update Files

// fs.sppendFile()
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', ' Hello Kathy! ', function (err) { //先创建
//     if (err) throw err;
//     console.log('Created!');
//   });
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) { //再更新
//   if (err) throw err;
//   console.log('Updated!');
// });

// fs.writeFile()
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hey Sweetie!', function (err) {
//     if (err) throw err;
//     console.log('Created!');
//   });
// fs.writeFile('mynewfile3.txt', 'Hi Moonpie!', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });


// Delete Files
// fs.unlink()
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});