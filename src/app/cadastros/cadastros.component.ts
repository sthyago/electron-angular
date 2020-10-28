import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {Cadastro} from "../models/Cadastro";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

 public entidade: Cadastro = new Cadastro();
 public erros: string[] = [];

  constructor(public appService: AppService,
              public router: Router,
              public messageService: MessageService) { }

  ngOnInit(): void {
  }

  cadastrarClick(){
    this.validaCadastro();
    if(this.erros.length > 0){
      this.messageService.add({severity:'error', summary:'Falha', detail:'Operação não efetuda.'});
      return;
    }else {
     this.messageService.add({severity:'success', summary:'Sucesso', detail:'Cadastro efetudo com êxito.'});
    }
  }

  voltarClick(){
    this.appService.isCadastroButtonVisible = true;
    this.appService.isLoginButtonVisible = true;
    this.router.navigateByUrl('');
  }

  validaCadastro(){
    if(this.appService.isNullOrUndefined(this.entidade)){
      return;
    } else {
      if(this.appService.isNullOrUndefined(this.entidade.cpfCnpj)){
        this.erros.push('CPF / CNPJ inválidos. Favor verificar valor informado');
        return;
      }
      if(this.appService.isNullOrUndefined(this.entidade.nome)){
        this.erros.push('Nome inválido. Favor verificar valor informado');
        return;
      }
      if(this.appService.isNullOrUndefined(this.entidade.endereco)){
        this.erros.push('Endereço inválido. Favor verificar valor informado');
        return;
      }
      if(this.appService.isNullOrUndefined(this.entidade.email)){
        this.erros.push('E-mail inválido. Favor verificar valor informado');
        return;
      }
    }
  }
  checkFields(){
    return (this.entidade?.nome?.length > 0 &&
            this.entidade?.email?.length > 0 &&
            this.entidade?.cpfCnpj?.length > 0 &&
            this.entidade?.endereco?.length > 0 &&
            this.entidade?.telefone?.length > 0 )
  }
}
