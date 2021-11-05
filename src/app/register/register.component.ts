import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  validator(username:any, password:any){

    var checker=[true,true];
    if(username.value=="")
    {
    checker[0]=false;
    alert("invalid username");
    username.style.borderColor="red";
    }
    else{ username.style.borderColor="green";}
    if(password.value=="")
    {
    checker[1]=false;
    alert("invalid password");
    password.style.borderColor="red";
    }
    else{ password.style.borderColor="green";}
    if(checker[0]==true && checker[1]==true)
    {alert("sign up valid")
    username.style.borderColor="green";
    password.style.borderColor="green";
    location.replace("homepage");
      }
    }
}
