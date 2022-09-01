
const express = require("express");
const { application } = require("express");

const app = express()
const PORT = 3001;

app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))



app.get('/', function(req, res) {
    res.sendFile(__dirname + "./public/index.html");
})

 app.get('/notes', function(req, res){
     res.sendFile(__dirname + "/public/notes.html")
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
