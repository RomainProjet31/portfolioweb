import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormationsComponent } from './formations/formations.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LanguageComponent } from './language/language.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormationsComponent,
    ExperienceComponent,
    PortfolioComponent,
    CarouselComponent,
    LanguageComponent,
    SkillComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
