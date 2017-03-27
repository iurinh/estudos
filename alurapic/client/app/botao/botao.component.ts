import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {
    @Input() nome: string = 'Ok';
    @Input() estilo: string = 'btn-default';//CSS Bootstrap
    @Input() tipo: string = 'button';//CSS Bootstrap
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();

    executaAcao(){
        if(confirm('Deseja excluir?')){
            this.acao.emit(null);
        }
    }
}