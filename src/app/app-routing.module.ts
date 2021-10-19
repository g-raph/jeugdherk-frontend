import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { CategoryComponent } from './categories/category/category.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { TeamListComponent } from './teams/team-list/team-list.component';


const routes: Routes = [
  {path: 'welkom', component: HomepageComponent},
  {path: 'club', component: AboutpageComponent},
  {path: 'nieuws', component: ArticleListComponent},
  {path: 'nieuws/:slug', component: ArticleDetailComponent},
  {path: 'ploegen', component: TeamListComponent},
  {path: 'ploegen/:slug', component: TeamDetailComponent},
  {path: 'sponsors', component: SponsorListComponent},
  {path: 'evenementen', component: EventListComponent},
  {path: 'evenementen/:slug', component: EventDetailComponent},
  {path: 'categorie/:slug', component: CategoryComponent},
  {path: 'contact', component: ContactpageComponent},
  {path: '**', redirectTo: 'welkom'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
