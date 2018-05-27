const bodyParser = require('body-parser');
const express = require('express')
    app = express();
const router = require('./route/routing');
const port = 4000;
const path = require ('path');

app
    .use(express.static('views'))
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({extended: true}))
    .set('view engine', 'ejs')

app.use('/', router)

app.listen(port, function() {
    console.log(`open at localhost:${port}`)
})