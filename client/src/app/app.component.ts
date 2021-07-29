import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from './_models/User';
import { AccountService } from './_Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';

  users : any;

  constructor( private accountservice : AccountService){}

  ngOnInit() {
   this.setCurrentUser();
  }

  setCurrentUser()
  {
    const user : User = JSON.parse(localStorage.getItem('user'));
    this.accountservice.setCurrentUser(user);
  }

  
}


