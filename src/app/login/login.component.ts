import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  welcomeMessage = "Login Page"
  userId = ""
  password = ""

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signIn(){
    if(this.userId == "admin" && this.password == "admin"){
      this.router.navigateByUrl("/welcome")
    }
    else{
      console.log(this.password)
      this.welcomeMessage = "Invalid Credentials"
    }
  }

  Heroes= [
    {"firstname": "Josh"},
    {"firstname": "Daniel"},
    {"firstname": "Cisco"},
    {"firstname": "Marisa"}
  ]

}
