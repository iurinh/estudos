import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste de envio de POST';

  service: AppService;

  @Output() acao = new EventEmitter();

  constructor(service: AppService){
    this.service = service;
  }

  submit(){
    this.service
        .post()
        .subscribe(res => {
            this.acao.emit(null);

            alert("Mandei! verifica lá!");
            console.log("Mandei! verifica lá!");
        }, erro => console.log(erro));    
  }
}
