
module.exports={
  login:login
}

function login(username,password,callback)
{
  //1. Check with database-- Please note, this will depend on what database you are going to use.

  //2. Compare username and password with database
      //I usually use password-hash-and-salt to compare password.
  var returnData={
        status:true,
        token:"<Replace with generated token variable>",
        email:"razmans@gmail.com"
      }



  //3.a. If username and password is OK status=true or false,
  callback(returnData);



}
