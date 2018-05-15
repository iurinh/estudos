import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
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
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  ) {
    
    let loading = this._loadingCtrl.create({
      content: 'Carregando carros...'
    })

    loading.present()

    this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos')
    .subscribe((carros) => { 
      this.carros = carros;
      loading.dismiss();
    }, (erro) => {
      loading.dismiss();
      this._alertCtrl.create({
        title: 'Falha de conexão',
        subTitle: 'Não foi possivel carregar os carros',
        buttons: [
          { text: 'Ok'}
        ]
      }).present();
    })
  }

}
