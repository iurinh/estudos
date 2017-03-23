import {View} from './View';//importa a view, se tiver o export na classe

export class MensagemView extends View {
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {
       
       return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
   }
}