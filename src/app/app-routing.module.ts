import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './components/recommendation/recommendation.component'
import { OverviewComponent } from './components/overview/overview.component'
import {NewComponent} from "./components/new/new.component";

const routes: Routes = [
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'new', component: NewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
