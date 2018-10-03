const data = require('./data.json')
const express = require('express')
const app = express()
const port = 3000

function findFunc (input) {
    for (let i=0; i<data.length; i++){
        const currentRow = data[i];
        const lowerCaseTicker = currentRow.ticker.toLowerCase();
        const lowerCaseName = currentRow.name.toLowerCase();
        if( (lowerCaseTicker.indexOf(input.toLowerCase()) != -1) || (lowerCaseName.indexOf(input.toLowerCase())!= -1)){
            // console.log(currentRow);
            return currentRow;
        }
    }
    return null;
}


app.get('/', function(req, res) {
    var inputFromWeb = req.query.s;
    var foundResult = findFunc(inputFromWeb); //foundResult是一个obj
    if(foundResult != null){
        // res.send(foundResult.ticker);
        res.send(foundResult);
    }
    else{
        res.send('error');
    }
})//可达到将其中一个符合要求的结果输出，接下来需要把所有符合的结果罗列出来

app.listen(3000)

//要解决页面在输入s之前的出错问题: TypeError: Cannot read property 'toLowerCase' of undefined