import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http'
import {AppComponent} from './app.component';
import {FotoModule} from './foto/foto.module';

@NgModule({
    imports:[BrowserModule, FotoModule, HttpModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]//inicializador
})
export class AppModule{

}