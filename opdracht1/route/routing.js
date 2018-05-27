const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
    res.render('index')
})

router.get('/project/:title', function (req, res){
   var title =  req.params.title;
   res.render('project', {
       title: title
   })
})

module.exports = router;