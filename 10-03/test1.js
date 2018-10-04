const express = require('express')
const app = express()
const port = 3000

var arr = ['how', 'are', 'you', 'I', 'am', 'fine', 'thanks'];
var arr1 = [];

function findFunc(input) { 
    for(let i=0 ; i<arr.length; i++){
        if(arr[i].indexOf(input) != -1){
            arr1.push(arr[i]);
        }
    }
    if(arr1.length != 0){
        return arr1;
    }
    else{
        return null;
    }
}

app.get('/', function(req, res) {
    var inputFromWeb = req.query.s;
    arr1 = [];
    arr1 = findFunc(inputFromWeb);
    if (arr1 != null){
        res.send(arr1);
    }
    else{
        res.send('error');
    }
})

app.listen(3000)