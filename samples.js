const express = require('express')
const app = express()
const port = 3000

const input = "mor";

for (let i=0; i<data.length; i++){
    const currentRow = data[i];
    const lowerCaseTicker = currentRow.ticker.toLowerCase();
    if (lowerCaseTicker.indexOf(input.toLowerCase()) != -1){
        console.log(currentRow);
    }
}

const content = console.log(currentRow)

app.get('/', function(req, res) {
    console.log(req);
    res.send(content);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(express.static('samples'))