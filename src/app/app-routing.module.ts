import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './componentes/homepage/homepage.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'privado', component:PrivadoPageComponent},
  {path:'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
