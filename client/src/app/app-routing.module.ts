import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './components/cars/cars.component';
import { InformationComponent } from './components/information/information.component';
import { PersonsComponent } from './components/persons/persons.component';

const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'car', component: CarsComponent },
  { path: 'persons', component: PersonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
