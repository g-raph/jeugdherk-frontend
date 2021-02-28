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
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { CategoryComponent } from './categories/category/category.component';
import { TreatmentDetailComponent } from './treatments/treatment-detail/treatment-detail.component';
import { TreatmentListComponent } from './treatments/treatment-list/treatment-list.component';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';
import { PricelistComponent } from './pages/pricelist/pricelist.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TreatmentTeaserComponent } from './treatments/treatment-teaser/treatment-teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    PageComponent,
    HomepageComponent,
    AboutpageComponent,
    ContactpageComponent,
    CategoryComponent,
    TreatmentDetailComponent,
    TreatmentListComponent,
    PricelistComponent,
    FooterComponent,
    TreatmentTeaserComponent
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
    MarkdownToHtmlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
