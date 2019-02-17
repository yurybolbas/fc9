import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { NewsListComponent } from './news-list/news-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewArticleComponent } from './view-article/view-article.component';

const AppRoutes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'article/:id', component: ViewArticleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    ViewArticleComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
