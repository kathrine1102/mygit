const data = require('./data.json')

// console.log(data);
// console.log("----------------------")

const input = "mor";

for (let i=0; i<data.length; i++){
    const currentRow = data[i];
    const lowerCaseTicker = currentRow.ticker.toLowerCase();
    if (lowerCaseTicker.indexOf(input.toLowerCase()) != -1){
        console.log(currentRow);
    }
}