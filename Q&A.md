>查看特定端口是否被占用

netstat -a -n -o | findstr :3000

>错误提示：“in unpopulated submodule ‘A’ ”

（翻译为”在一个无人居住的子模块“，感觉意思是说位于子模块下，无法 add） 

解决方法是：


删除 A/ 的.git 文件夹
在 ./ 下输入"git rm -r –cached A/"
谨记：是  A/  ，意为A目录下

在 ./ 下输入”git add A” 
git commit -m “”
git push origin master

我感觉主要是第二步操作：“git –cached < file >”  使名为file的文件不再接受版本控制，所以就没有了所谓的子模块的冲突了。
