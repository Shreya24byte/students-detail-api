const express = require('express');
const fs = require('fs');
const { reset } = require("nodemon");
const { response} = require("../app");
const router = express.Router();

const folderPath = `${ __dirname}/data`
//secondary routers path
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/getDetails", function(req, res) {
  fs.readFile(`${folderPath}/student.json`, function(err, data){
    if(err){
      console.log("Error", err);
    } else {
      const dataFromFile = JSON.parse(data);
      console.log("Data from file", dataFromFile);
      res.send(dataFromFile);
    }
  })
});

router.post("/add", function(req, res){
  console.log("Data from client side ",req.body);
  const characterData = req.body;
  fs.writeFile(`${folderPath}/student.json`, 
              JSON.stringify(characterData), 
              function (err){
    if(err) {
      console.log("error in file ",err);
    } else {
      console.log("file written successfully");
      res.send({ result: "success"});
    }
  })
})

module.exports = router;
