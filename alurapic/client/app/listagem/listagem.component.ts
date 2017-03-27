import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component';
import {PainelComponent} from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {
    
    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService){
        this.service = service;

        service
            .lista()
            .subscribe(
                fotos => this.fotos = fotos, 
                erro => console.log(erro)
            );
    }
    
    remover(foto: FotoComponent, painel: PainelComponent){
        this.service
            .remove(foto)
            .subscribe(
                () => {
                    painel.fadeOut(() => {
                        console.log('Foto removida com sucesso')
                        let novasFotos = this.fotos.slice(0);//Slice copia num novo array

                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);

                        this.fotos = novasFotos;

                        this.mensagem = 'Foto removida com sucesso';
                    });
                },
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possivel remover a foto';
                }
            );
    }
}