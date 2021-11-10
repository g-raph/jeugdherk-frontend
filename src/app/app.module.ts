import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PageComponent } from './pages/page/page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { CategoryComponent } from './categories/category/category.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleTeaserComponent } from './articles/article-teaser/article-teaser.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventTeaserComponent } from './events/event-teaser/event-teaser.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamListComponent } from './teams/team-list/team-list.component';
import { TeamTeaserComponent } from './teams/team-teaser/team-teaser.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { SponsorTeaserComponent } from './sponsors/sponsor-teaser/sponsor-teaser.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { InfopageDetailComponent } from './infopages/infopage-detail/infopage-detail.component';
import { InfopageTeaserComponent } from './infopages/infopage-teaser/infopage-teaser.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageComponent,
    HomepageComponent,
    ContactpageComponent,
    CategoryComponent,
    FooterComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    ArticleTeaserComponent,
    EventDetailComponent,
    EventListComponent,
    EventTeaserComponent,
    TeamDetailComponent,
    TeamListComponent,
    TeamTeaserComponent,
    AboutpageComponent,
    SponsorTeaserComponent,
    SponsorListComponent,
    InfopageDetailComponent,
    InfopageTeaserComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MarkdownModule.forRoot(),
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
