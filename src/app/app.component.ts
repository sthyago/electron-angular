import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {MessageService, PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent implements AfterViewInit, OnInit{
  constructor(public appService: AppService,
              public messageService: MessageService,
              private primengConfig: PrimeNGConfig) {
  }

  bgStyle: any;

  ngAfterViewInit() {
    this.appService.ultimasRotas = window.location.href;
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
