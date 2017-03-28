import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-apresenta',
  templateUrl: './apresenta.component.html',
  styleUrls: ['./apresenta.component.css']
})
export class ApresentaComponent implements OnInit {

  name: string = '... Desculpa, não conseguimos resgatar seu nome :('

  route: ActivatedRoute;
  router: Router;

  constructor(route: ActivatedRoute, router: Router) { 
    this.route = route;
    this.router = router;

    this.route.params.subscribe(
      params => {
        let name = params['name'];
        console.log('ApresentaComponent - ' + name);

        if(name)
          this.name = name;
      }
    );
  }

  ngOnInit() {
  }

}
