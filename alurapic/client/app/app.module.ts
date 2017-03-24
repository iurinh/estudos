import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {PainelModule} from './painel/painel.module';
import 'rxjs/add/operator/map';

@NgModule({
    imports:[BrowserModule, FotoModule, HttpModule, PainelModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]//inicializador
})
export class AppModule{

}