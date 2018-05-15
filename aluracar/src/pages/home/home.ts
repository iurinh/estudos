import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, LoadingController } from 'ionic-angular';
import { Carro } from '../../modelos/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(
    public navCtrl: NavController, 
    private _http: HttpClient,
    private _loadingCtrl: LoadingController
  ) {
    
    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento'
    })

    loading.present()

    this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
    .subscribe((carros) => { 
      this.carros = carros;
      loading.dismiss();
    });
    
  }

}
