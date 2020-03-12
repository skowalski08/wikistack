const express = require('express')
const router = express();
const addPage = require('../views/addPage')

// router.use((req, res, next) => {
//     res.send('got to GET /wiki/')
// })


router.get('/',(req, res, next) =>{
    res.send('got to GET /wiki/');
});

router.post('/',(req, res, next) =>{
    res.send('got to POST /wiki/');
});

router.get('/add',(req, res, next) =>{
    res.send(addPage());
});

module.exports = router;
