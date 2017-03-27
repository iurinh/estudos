import {Component} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FotoComponent} from '../foto/foto.component';
import {FotoService} from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router){
        this.service = service;

        this.route = route;
        this.router = router;

        this.route.params.subscribe(
            params => {
                let id = params['id'];
                console.log('parametro: '+ id);

                if(id)
                    this.service
                        .buscaPorId(id)
                        .subscribe(
                            foto => this.foto = foto,
                            erro => console.log(erro)
                        );
            }
            );

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event: Event){
        event.preventDefault();
        console.log(this.foto);

        this.service
        .cadastra(this.foto)
        .subscribe(res => {
            this.mensagem = res.getMensagem;

            this.foto = new FotoComponent();

            if(!res.ehInclusao)
                this.router.navigate(['/']);
        }, erro => console.log(erro));
    }
    
}