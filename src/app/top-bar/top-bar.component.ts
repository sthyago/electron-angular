import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router, public appService: AppService, ) { }

  ngOnInit(): void {
  }

  goTo(url){
    if(url === '/login'){
      this.appService.isLoginButtonVisible = false;
      this.appService.isCadastroButtonVisible = true;
      this.appService.ultimasRotas = '/login';
    }
    if(url === '/cadastro'){
      this.appService.isCadastroButtonVisible = false;
      this.appService.isLoginButtonVisible = true;
      this.appService.ultimasRotas = '/cadastro';
    }

    this.router.navigateByUrl(url);
  }
  changeTheme() {
    switch (this.appService.currentTheme){
      case 'white':
        this.appService.bgStyleColor = {'background-color': '#1C1C1C','color':'white'};
        this.appService.bgStyleColorHeader = {'background-color': 'black', 'border-bottom':'1px solid black'};
        this.appService.currentTheme = 'dark';
        break;
      case 'dark':{
        this.appService.bgStyleColor = {'background-color': 'white','color':'black'};
        this.appService.bgStyleColorHeader = {'background-color': 'white', 'border-bottom':'1px solid black'};
        this.appService.currentTheme = 'white';
        break;
      }
    }
  }
}
