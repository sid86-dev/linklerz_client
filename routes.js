var express = require("express");
var bodyParser = require('body-parser');
var https = require("https");
const { response } = require("express");
var router = express.Router();

var axios = require("axios");

var url = 'https://lerz.herokuapp.com/api/';

router.get('/', function(req, res){
    res.render('index');
});

router.get('/li/:username', function (req, res) {
    axios.get(url + req.param("username"))
        .then(result => {
           
            res.render('link_page', { username: req.param("username"), l0: (result.data)[0].link, n0: (result.data)[0].name, l1: (result.data)[1].link, n1: (result.data)[1].name, l2: (result.data)[2].link, n2: (result.data)[2].name, l3: (result.data)[3].link, n3: (result.data)[3].name, l4: (result.data)[4].link, n4: (result.data)[4].name, });
            // console.log(JSON.stringify(data))
        })
        .catch(error => {
            console.log(error)
        })

});

module.exports = router;