const express = require('express')
const app = express()
const port = 3000

var arr = ['how', 'are', 'you', 'I', 'am', 'fine', 'thanks'];
var arr1 = [];

function findFunc(input) { 
    for(let i=0 ; i<arr.length; i++){
        if(arr[i].indexOf(input) != -1){
            const currenRow = arr[i];
            // arr1.push(arr[i]);
            arr1.push(currenRow);
            return arr1;
        }
    }
    return null;
}

app.get('/', function(req, res) {
    var inputFromWeb = req.query.s;
    arr1 = [];
    arr1 = findFunc(inputFromWeb);
    if(arr1 != null){
        res.send(arr1);
    }
    // else if('/'后面是空的也就是只有localhost:3000时){
    //     res.send('');
    // }
    else{
        res.send('error');
    }
})

app.listen(3000)

//还不能实现字母乱序输入时找出符合的结果