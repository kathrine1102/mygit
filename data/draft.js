const data = require('./data.json')
const express = require('express')
const app = express()
const port = 3000
const input = 'mor'


for (let i=0; i<data.length; i++){
    const currentRow = data[i];
    const lowerCaseTicker = currentRow.ticker.toLowerCase();
    if( (lowerCaseTicker.indexOf(input.toLowerCase()) != -1)){
        console.log(currentRow);
    }
}

app.get('/', function(req, res) {
    console.log(req.query.s);
    res.send("test");
})


console.log("-------------")
console.log(input)

//app.listen(3000)