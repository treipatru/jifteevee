var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'JIFTEEVE',
    message: process.env.KEY_GIPHY,
    gifUrl: 'https://media.giphy.com/media/1k2YhdutgkQzJWnsyp/giphy.gif'
  });
});

module.exports = router;
