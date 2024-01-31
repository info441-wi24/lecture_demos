import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.userid){
    res.send('Here is the information for you (' + req.session.userid + ")");
  }else{
    res.send("Error: you must be logged in");
  }
});

router.post("/login", function(req, res, next) {
  //check username and password
  if(req.body.username == "kylethayer" && req.body.password == "asdasd"){
    //mark session as logged in
    req.session.userid = "kylethayer"
    res.send("you logged in")
  } else if(req.body.username == "anotheruser" && req.body.password == "pwd"){
    //mark session as logged in
    req.session.userid = "anotheruser"
    res.send("you logged in")
  } else{
    //don't update logged in user
    res.send("wrong login info")
  }  
})

router.post("/logout", function(req, res, next) {
  req.session.destroy()
  res.send("you are logged out")
})
  

export default router;
