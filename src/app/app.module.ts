import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {BootstrapModule} from "./bootstrap/bootstrap.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { MainAppsComponent } from './main-apps/main-apps.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from './login/login.component';
import {ToastModule} from 'primeng/toast';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    MainAppsComponent,
    HomeComponent,
    CadastrosComponent,
    PageNotFoundComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BootstrapModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    ToastModule,
    MatIconModule,
    MatDividerModule,
    CarouselModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
