import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{

    transform(fotos, digitando){
        console.log(fotos);
        console.log(digitando);
    }
}