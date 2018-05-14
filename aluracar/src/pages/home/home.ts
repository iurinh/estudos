import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros;

  constructor(public navCtrl: NavController) {
    this.carros = [
      {nome: 'Brasilia amarela', preco: 2000}
    ];
  }

}
