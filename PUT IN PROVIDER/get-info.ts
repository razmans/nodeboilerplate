import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class GetInfoProvider {

  constructor(public http: Http,private storage:Storage) {
    console.log('Hello GetInfoProvider Provider');
  }



  login(username,password)
  {
    this.http.post("http://localhost:3000/login",{
      staff_id:"razman@atasawan.net",
      password:"123456"
     },{})
    .subscribe(data=>{
      // console.log("THE DATA:",data._body);
      var datax=JSON.parse(data._body);

      console.log("LOGIN DATA",datax.token);
      this.storage.set("TOKEN",datax.token);


    });
  }


  getToken()
  {
    this.storage.get("TOKEN")
    .then(data=>{
      console.log("THE TOKEN IS:",data);

    });
  }

}
