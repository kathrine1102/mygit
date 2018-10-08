# Create Files
* fs.appendFile(), 将指定的内容附加到文件。如果文件不存在，将创建该文件
* fs.open(), 将“flag”作为第二个参数，如果标志为“w”表示“写入”，则打开指定的文件进行写入。如果该文件不存在，则创建一个空文件

（“flag”是什么）

>code

	var fs = require('fs');
	
	fs.open('mynewfile2.txt', 'w', function (err, file) {
	  if (err) throw err;
	  console.log('Saved!');
	});
		
	// fs.open('mynewfile2.txt', 'r', function (err, file) { //此处的"r"应该为读取
	//   if (err) throw err;
	//   console.log('Saved!');
	// });

* fs.writeFile(), 用于替换指定的文件和内容（如果存在）。如果该文件不存在，将创建包含指定内容的新文件

	###所以fs.appendFile()、fs.open()和fs.writeFile()都是自带判断的，先判断 再执行