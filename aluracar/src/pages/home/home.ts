import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Carro } from '../../modelos/carro';
import { CarrosServiceProvider } from '../../providers/carros-service/carros-service';
import { NavLifecicles } from '../../utils/ionic/nav/nav-lifecycles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements NavLifecicles {

  public carros: Carro[];

  constructor(
    public navCtrl: NavController,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private carrosService: CarrosServiceProvider
  ) { }

  ionViewDidLoad() {
    let loading = this._loadingCtrl.create({
      content: 'Carregando carros...'
    })

    loading.present()

    this.carrosService.lista()
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
