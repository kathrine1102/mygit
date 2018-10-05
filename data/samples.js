const data = require('./data.json')
const express = require('express')
const app = express()
const port = 3000


function findFunc (input) {
    for (let i=0; i<data.length; i++){
        const currentRow = data[i];
        const lowerCaseTicker = currentRow.ticker.toLowerCase();
        if( (lowerCaseTicker.indexOf(input.toLowerCase()) != -1)){
            // console.log(currentRow);
            return currentRow;
        }
    }
    return null;
}


app.get('/', function(req, res) {
    var inputFromWeb = req.query.s;
    var foundResult = findFunc(inputFromWeb);
    if(foundResult != null){
        res.send(foundResult.name);
    }
    else{
        res.send('error');
    }
})

// const input = `mor`;
// console.log(input);

// var varA = findFunc("mor");

app.listen(3000)

