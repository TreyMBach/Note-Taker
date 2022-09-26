const fs = require('fs');
const uuid = require('../helpers/uuid')
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    
    fs.readFile('./db/db.json', 'utf8', (err, data) => {

        if(err) {
            console.log(err)
        } else {
            return res.json(JSON.parse(data))
        }

    })
})
  
router.post('/api/notes', (req, res) => {
    
    fs.readFile('./db/db.json', 'utf8', (err, data) => {

        let notes = JSON.parse(data);

        const {title, text} = req.body

        if(req.body) {
            const newNotes = {
                title,
                text,
                id: uuid()
            };

            notes.push(newNotes)

            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                if (err) {
                    console.info(err)
                } else {
                    res.json(notes)
                }
            })
        }

    })
  
})

module.exports = router;

