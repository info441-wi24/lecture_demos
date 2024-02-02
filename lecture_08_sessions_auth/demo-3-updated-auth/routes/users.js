import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.isAuthenticated){
    res.send(`
    responding with information about user
    with the name: ${req.session.account.name}
    and the username: ${req.session.account.username}
    `);
  }else{
    res.send("Error: you must be logged in");
  }
});


export default router;
