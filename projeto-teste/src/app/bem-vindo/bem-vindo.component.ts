import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  @Input() name: string = '';

  route: ActivatedRoute;
  router: Router;

  title: string = 'Bem Vindo';

  constructor(route: ActivatedRoute, router: Router) { 
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
  }

  enviarNome(event: Event){
        event.preventDefault();

        console.log('BemVindoComponent - ' + this.name);

        this.router.navigate(['/apresenta/'+this.name]);
  }
}
