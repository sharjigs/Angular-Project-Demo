import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutsComponent } from './abouts/abouts.component';


const aboutrot: Routes = [
  { path: '', component: AboutsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(aboutrot)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
