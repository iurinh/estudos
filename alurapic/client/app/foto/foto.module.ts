import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],//O q o modulo tem
    exports: [FotoComponent, FiltroPorTitulo]//O que os outros modulos q dependem desse podem usar 
})
export class FotoModule{

}