const express = require("express");
const fetch = require ('node-fetch')
const app = express();


app.get("/", (req, res) => {
  res.send('H E C K Y E A H')
});

function pong() { 
fetch(process.env.web1)
fetch(process.env.web2)
  
console.log('hAha site ping go BrRRR')
} 

setInterval(pong, 60000);


// listen for requests | Don't change this!
const listener = app.listen(process.env.PORT, () => {
  console.log("Listening on PORT " + listener.address().port);
});
