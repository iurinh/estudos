import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.routes';
import 'rxjs/add/operator/map';

@NgModule({
    imports:[   
        BrowserModule, 
        FotoModule, 
        HttpModule, 
        PainelModule,
        routing,
        FormsModule
    ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent],
    bootstrap: [AppComponent]
})
export class AppModule{ }