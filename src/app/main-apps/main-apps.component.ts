import { Component, OnInit } from '@angular/core';
import {faHome, faShoppingCart, faShoppingBag, faIndustry, faNetworkWired, faCashRegister, faChartLine, faCogs, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-apps',
  templateUrl: './main-apps.component.html',
  styleUrls: ['./main-apps.component.css']
})
export class MainAppsComponent implements OnInit {

  public bgStyle;
  public faHome = faHome;
  public faShoppingCart = faShoppingCart;
  public faShoppingBag = faShoppingBag;
  public faIndustry = faIndustry;
  public faNetworkWired = faNetworkWired;
  public faCashRegister = faCashRegister;
  public faChartLine = faChartLine;
  public faCogs = faCogs;
  public faInfoCircle = faInfoCircle;

  constructor(public appService: AppService, public router: Router) { }

  ngOnInit(): void {
    this.bgStyle = {'background-color':'none'};
  }
  menuItems = [
    {id: 1, value:'Home', icon: this.faHome, route: '/home'},
    {id: 2, value:'Pedidos', icon: this.faShoppingCart, route: '/pedidos'},
    {id: 3, value:'Produtos', icon: this.faShoppingBag, route: '/produtos'},
    {id: 4, value:'Clientes', icon: this.faIndustry, route: '/clientes'},
    {id: 5, value:'Conexão', icon: this.faNetworkWired, route: '/conexoes'},
    {id: 6, value:'Pagamentos', icon: this.faCashRegister, route: '/pagamento'},
    {id: 7, value:'Relatórios', icon: this.faChartLine, route: '/relatorios'},
    {id: 8, value:'Configurações', icon: this.faCogs, route: '/configuracoes'},
    {id: 9, value:'Sobre', icon: this.faInfoCircle, route: '/sobre'}
  ];

  menuItemClick(url){
    this.appService.ultimasRotas = url;

    switch (url){
      case '/home':{
        this.setActiveMenuItem('/home');
        this.router.navigateByUrl(url);
        break;
      }
      case '/pedidos':{
        this.setActiveMenuItem('/pedidos');
        this.router.navigateByUrl(url);
        break;
      }
      case '/produtos':{
        this.setActiveMenuItem('/produtos');
        this.router.navigateByUrl(url);
        break;
      }
      case '/clientes':{
        this.setActiveMenuItem('/clientes');
        this.router.navigateByUrl(url);
        break;
      }
      case '/conexoes':{
        this.setActiveMenuItem('/conexoes');
        this.router.navigateByUrl(url);
        break;
      }
      case '/pagamento':{
        this.setActiveMenuItem('/pagamento');
        this.router.navigateByUrl(url);
        break;
      }
      case '/relatorios':{
        this.setActiveMenuItem('/relatorios');
        this.router.navigateByUrl(url);
        break;
      }
      case '/configuracoes':{
        this.setActiveMenuItem('/configuracoes');
        this.router.navigateByUrl(url);
        break;
      }
      case '/sobre':{
        this.setActiveMenuItem('/sobre');
        this.router.navigateByUrl(url);
        break;
      }
    }
  }

  setActiveMenuItem(itemName){
    switch (itemName){
      case '/home':{
        document.getElementById('/home').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/pedidos':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/produtos':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/clientes':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/conexoes':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/pagamento':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/relatorios':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/configuracoes':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        document.getElementById('/sobre').style.border = 'none';
        break;
      }
      case '/sobre':{
        document.getElementById('/home').style.border = 'none';
        document.getElementById('/pedidos').style.border = 'none';
        document.getElementById('/produtos').style.border = 'none';
        document.getElementById('/clientes').style.border = 'none';
        document.getElementById('/conexoes').style.border = 'none';
        document.getElementById('/pagamento').style.border = 'none';
        document.getElementById('/relatorios').style.border = 'none';
        document.getElementById('/configuracoes').style.border = 'none';
        document.getElementById('/sobre').style.border = this.appService.currentTheme === 'dark'? '1px solid white':'1px solid black';
        break;
      }
    }

  }
}
