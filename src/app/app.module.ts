import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { Project1Component } from './portfolio-section/project-1/project-1.component';
import { Project2Component } from './portfolio-section/project-2/project-2.component';
import { Project3Component } from './portfolio-section/project-3/project-3.component';
import { Project4Component } from './portfolio-section/project-4/project-4.component';
import { FooterComponent } from './footer/footer.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './footer/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    MainPageComponent,
    MySkillsComponent,
    PortfolioSectionComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    FooterComponent,
    BurgerMenuComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
