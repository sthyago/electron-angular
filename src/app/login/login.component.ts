import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
  }

  public usuarioLogin;
  public usuarioSenha;

  checkLoginSenha(): boolean{
    return (this.usuarioLogin?.length > 0  && this.usuarioSenha?.length > 0);
  }

  voltarClick(){
    this.appService.isLoginButtonVisible = true;
    this.appService.isCadastroButtonVisible = true;
    this.router.navigateByUrl('');
  }
}
