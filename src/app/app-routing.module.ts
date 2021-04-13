import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './categories/category/category.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PricelistComponent } from './pages/pricelist/pricelist.component';
import { TreatmentDetailComponent } from './treatments/treatment-detail/treatment-detail.component';
import { TreatmentListComponent } from './treatments/treatment-list/treatment-list.component';


const routes: Routes = [
  {path: 'welkom', component: HomepageComponent},
  {path: 'tarieven', component: PricelistComponent},
  {path: 'behandelingen', component: TreatmentListComponent},
  {path: 'behandelingen/:id', component: TreatmentDetailComponent},
  {path: 'categories/:id', component: CategoryComponent},
  {path: 'contact', component: ContactpageComponent},
  {path: '**', redirectTo: 'welkom'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
