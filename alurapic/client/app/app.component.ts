import {Component} from '@angular/core';

@Component({
    moduleId: module.id,//Com isso o angular procura o arquivo a partir da pasta atual desse script
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {}