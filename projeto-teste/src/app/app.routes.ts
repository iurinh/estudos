import {Routes, RouterModule} from '@angular/router';
import {BemVindoComponent} from './bem-vindo/bem-vindo.component';
import {ApresentaComponent} from './apresenta/apresenta.component';

const appRoutes: Routes = [
    {path: '', component: BemVindoComponent},
    {path: 'apresenta', component: ApresentaComponent},
    {path: 'apresenta/:name', component: ApresentaComponent},
    {path: '**',component: BemVindoComponent}
];

export const routing = RouterModule.forRoot(appRoutes);