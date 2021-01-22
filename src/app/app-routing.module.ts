import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { FreelanceComponent } from './components/freelance/freelance.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  // { path: 'repositorios', component: RepositoriosComponent },
  { path: 'freelance', component: FreelanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
