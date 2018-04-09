const bodyParser = require('body-parser');
const express = require('express')
    app = express();
const router = require('./route/routing');
const port = 4000;

app
    .use(express.static('views'))
    .use(express.static('public'))
    .use(bodyParser.urlencoded({extended: true}))
    .set('view engine', 'ejs')

app.use('/', router)

app.listen(port, function() {
    console.log(`open at localhost:${port}`)
})