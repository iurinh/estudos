import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipes';
import {FotoService} from './foto.service'

@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo],
    exports: [FotoComponent, FiltroPorTitulo],
    providers: [FotoService]//Nao eh um pipe e nao tem decorator, por isso apenas em 'providers'
})
export class FotoModule{

}