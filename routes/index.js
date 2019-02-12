var express = require('express');
var router = express.Router();
var son={tit:"tit"}
var par
var getPar=function(req, res, next){
par=req.params.id

next()}

router.get('/', function(req, res, next) {

res.render('index', { title: 'Express',
son:son,par:par

});
});

module.exports = router;
