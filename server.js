// const express = require("express");
// const notesData  = require('./db/db.json')
// const path = require('path');
// const fs = require('fs');
// const api = require('./routes/routes.js')

// const app = express()
// const PORT = 3001;

// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use(express.json())
// app.use('/api', api)

const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/routes.js');

// Initialize Express
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('', api)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "./public/index.html");
})

app.get('/notes', (req, res) => {
    res.sendFile(__dirname + "/public/notes.html")
})


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


