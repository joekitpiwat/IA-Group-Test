import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFiveComponent } from './components/article-five/article-five.component';
import { MyHerosComponent } from './components/my-heros/my-heros.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { TestListComponent } from './components/test-list/test-list.component';

const routes: Routes = [
  {
    path: '',
    component: TestListComponent
  },
  {
    path: 'hero',
    component: MyHerosComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'article-five',
    component: ArticleFiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
