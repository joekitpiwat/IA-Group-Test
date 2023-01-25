import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHerosComponent } from './my-heros/my-heros.component';
import { TestListComponent } from './test-list/test-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: TestListComponent
  },
  {
    path: 'hero',
    component: MyHerosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
