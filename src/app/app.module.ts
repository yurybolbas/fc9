import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { NewsListComponent } from './news-list/news-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewArticleComponent } from './view-article/view-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { FormsModule } from '@angular/forms';
import { AddArticleComponent } from './add-article/add-article.component';

const AppRoutes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'article/:id', component: ViewArticleComponent},
  {path: 'edit-article/:id', component: EditArticleComponent},
  {path: 'add-article', component: AddArticleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    ViewArticleComponent,
    EditArticleComponent,
    AddArticleComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
