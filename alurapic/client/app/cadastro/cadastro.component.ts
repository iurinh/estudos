import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component'

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto: FotoComponent = new FotoComponent();

    constructor(){
        this.foto.titulo = 'A';
        this.foto.descricao = 'B';
        this.foto.url = "C";
    }

    cadastrar(event: Event){
        event.preventDefault();
        console.log(this.foto);
    }
}