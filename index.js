const express = require('express');
const app = express();
const funky=require('./function.js');

// app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login', (req, res) =>{
  //1. Get username and password from header
  var username=req.get("username");
  var password=req.get("password");
  //console.log(username,password);

  //2. Send to function to check if its ok or not
  funky.login(username,password,function(returnData){
    if(returnData.status==true)
    {
      res.send('{"status":1,"statusMsg":"Login Success!","token":"'+returnData.token+'","userEmail":"'+returnData.email+'"}');
    }
    else
    {
      res.send('{"status":99, "msg":"Wrong username/password"}');
    }
  })
})

app.listen(3000, () => console.log('Listening on port 3000!'))
