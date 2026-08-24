import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
export const routes: Routes = [
    {path: "", component: Login},
    {path: 'registro', component:Register},
    {path: 'dashboard', component:Dashboard},
   
];
