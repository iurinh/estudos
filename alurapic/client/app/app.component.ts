import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,//Com isso o angular procura o arquivo a partir da pasta atual desse script
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    // fotos: Array<Object> = []; Tambem pode ser assim!!!
    fotos: Object[] = [];

    constructor(http: Http){//Angular2 compreende que precisa injetar a dependencia de Http, mas precisa de um provider. Esses ":" indica o tipo da variavel, nao precisa de @Inject
        let stream = http.get('v1/fotos');
        stream.subscribe(res => {
            this.fotos = res.json();
            console.log(this.fotos);
        });
    }
}