import { Component, OnInit } from '@angular/core';
import {Produto} from "../models/Produto";
import {AppService} from "../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Produto[] = [
    {id: '1', name: 'Refigerantes', price: 8.95, inventoryStatus: 'INSTOCK', image:'./assets/images/products/coca_cola.png'},
    {id: '2', name: 'Abacaxi', price: 6.74, inventoryStatus: 'OUTSTOCK', image:'./assets/images/products/abacaxi.png'},
    {id: '3', name: 'Creme p/ cabelo', price: 12.93, inventoryStatus: 'INSTOCK', image:'./assets/images/products/creme_cabelo_kit.png'},
    {id: '4', name: 'Arroz California (5kg)', price: 23.92, inventoryStatus: 'OUTSTOCK', image:'./assets/images/products/arroz_5kg.png'},
    {id: '5', name: 'Desodorante Dove', price: 9.95, inventoryStatus: 'INSTOCK', image:'./assets/images/products/desodorante.png'},
    {id: '6', name: 'Fraudas Pampers', price: 18.42, inventoryStatus: 'OUTSTOCK', image:'./assets/images/products/fraldas_kit.png'},
    {id: '7', name: 'Detergente', price: 2.05, inventoryStatus: 'INSTOCK', image:'./assets/images/products/detergente_triex.png'},
    {id: '8', name: 'Iogurte Nestlé', price: 2.78, inventoryStatus: 'OUTSTOCK', image:'./assets/images/products/iogurte_de_frutas.png'},
    {id: '9', name: 'Shampoo Elseve', price: 11.83, inventoryStatus: 'INSTOCK', image:'./assets/images/products/shampoo_kit.png'},
    {id: '10', name: 'Sabão em pó', price: 9.97, inventoryStatus: 'OUTSTOCK', image:'./assets/images/products/sabao_po.png'},
    {id: '11', name: 'Cereal', price: 13.89, inventoryStatus: 'INSTOCK', image:'./assets/images/products/cereal.png'},
    {id: '12', name: 'Kit Panela', price: 127.69, inventoryStatus: 'INSTOCK', image:'./assets/images/products/kit_panela.png'},
    {id: '13', name: 'Sabonete', price: 2.73, inventoryStatus: 'INSTOCK', image:'./assets/images/products/sabonete.png'},
    {id: '14', name: 'Kit Edredom', price: 221.50, inventoryStatus: 'INSTOCK', image:'./assets/images/products/kit_edredom.png'},
    {id: '15', name: 'Kit Edredom', price: 221.50, inventoryStatus: 'OUTSTOCK', image:'./assets/images/products/kit_edredom.png'},
    {id: '16', name: 'Melancia (kg)', price: 1.50, inventoryStatus: 'INSTOCK', image:'./assets/images/products/melancia.png'},
    {id: '17', name: 'Cerveja Beer (caixa)', price: 31.50, inventoryStatus: 'INSTOCK', image:'./assets/images/products/cerveja.png'},
    {id: '18', name: 'Trigo (kg)', price: 4.48, inventoryStatus: 'INSTOCK', image:'./assets/images/products/trigo.png'},
    {id: '19', name: 'Leite (L)', price: 3.49, inventoryStatus: 'INSTOCK', image:'./assets/images/products/leite_liquido.png'},
    {id: '20', name: 'Papel Higiênico ', price: 11.99, inventoryStatus: 'INSTOCK', image:'./assets/images/products/papel_higienico.png'},
  ];

  constructor(public appService: AppService) { }

  ngOnInit(): void {

  }


}
