import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Components/principal/principal.component';

const routes: Routes = [
  {path: 'inicio', component: PrincipalComponent},
  {path:'' , pathMatch: 'full', redirectTo: 'inicio'},
  {path:'**' , pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
