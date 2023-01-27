import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFiveComponent } from './components/article-five/article-five.component';
import { CitizenidCheckComponent } from './components/citizenid-check/citizenid-check.component';
import { MyHerosComponent } from './components/my-heros/my-heros.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { TriangleComponent } from './components/triangle/triangle.component';

const routes: Routes = [
  {
    path: '',
    component: TestListComponent,
    children: [
      {
        path: 'citizendid-check',
        component: CitizenidCheckComponent
      },
      {
        path: 'article-five',
        component: ArticleFiveComponent
      },
      {
        path: 'hero',
        component: MyHerosComponent
      },
      {
        path: 'triangle',
        component: TriangleComponent
      },
    ]
  },
  {
    path: 'posts',
    component: PostListComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
