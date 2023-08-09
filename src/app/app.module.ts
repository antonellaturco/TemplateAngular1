import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ClientsComponent } from './clients/clients.component';
import { TeamComponent } from './team/team.component';
import { NuestrosClientesComponent } from './nuestros-clientes/nuestros-clientes.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AboutUsComponent,
    WhyUsComponent,
    PortfolioComponent,
    ClientsComponent,
    TeamComponent,
    NuestrosClientesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
