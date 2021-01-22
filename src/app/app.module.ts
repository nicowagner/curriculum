import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { FreelanceComponent } from './components/freelance/freelance.component';
import { GitreposComponent } from './components/gitrepos/gitrepos.component';
import { HeaderComponent } from './components/header/header.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienciaComponent,
    FooterComponent,
    FreelanceComponent,
    GitreposComponent,
    HeaderComponent,
    RepositoriosComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
