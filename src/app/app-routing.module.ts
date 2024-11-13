import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultilangpageComponent } from './components/multilangpage/multilangpage.component';

const routes: Routes = [
  { path: '', component: MultilangpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
