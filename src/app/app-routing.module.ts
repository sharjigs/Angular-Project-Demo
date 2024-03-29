import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// import { EmployeesModule } from './modules/employees/employees.module';
// import { DepartmentModule } from './modules/department/department.module';
// import { CustomerModule } from './modules/customer/customer.module';
// import { AdminModule } from './modules/admin/admin.module';
// import { ContactModule } from './modules/contact/contact.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./modules/work/work.module').then(m => m.WorkModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
