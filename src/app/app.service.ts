import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public isLoginButtonVisible: boolean = true;
  public isCadastroButtonVisible: boolean = true;

  public ultimasRotas;
  public currentTheme = 'white';
  public bgStyleColor = {'background-color':'white', 'color':'black'};
  public bgStyleColorHeader = {'background-color':'white', 'border-bottom':'1px solid black'};

  public isNullOrUndefined(obj: any): boolean{
    if (obj === null || obj === undefined || obj.length <= 0){
      return  true;
    } else {
      return false;
    }
  }

  public isNumberKey(event){
    return ((event.charCode >= 44 && event.charCode <= 57) || (event.charCode === 32));
  }

}
