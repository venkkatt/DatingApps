import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any ={}
  loggedIn =false;
 

  constructor(public accountService : AccountService) { }

  ngOnInit(): void {
   }

  login(){
   this.accountService.login(this.model).subscribe(
     response =>
     {
       console.log(response);
     
     },
     error =>
     {
       console.log(error);
     }
   )
  }

  logout()
  {
    this.accountService.logout();
   
  }

}
