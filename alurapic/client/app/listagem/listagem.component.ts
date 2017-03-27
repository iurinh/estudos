import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {
    
    fotos: FotoComponent[] = [];

    constructor(service: FotoService){
        service
            .lista()
            .subscribe(
                fotos => this.fotos = fotos, 
                erro => console.log(erro)
            );
    }

    remover(foto: FotoComponent){
                console.log('Foto removida com sucesso');
                console.log(foto);
        // service
        //     .remove(foto)
        //     .subscribe(
        //         console.log('Foto removida com sucesso');
        //     )
    }
}