var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  isLoggedIn = true // pretend this is loaded from session

  storeItems = [
    {name: "apple", price: 2},
    {name: "orange", price: 1.5},
    {name: "m&ms", price: 1.5}
  ]

  res.render('index', { 
    title: 'EJS store example' ,
    isLoggedIn: isLoggedIn,
    storeItems: storeItems
  });
});

module.exports = router;
