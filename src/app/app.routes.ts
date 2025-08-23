import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Main } from './pages/main/main';
import { List } from './pages/list/list';
import { Authguard } from './services/authguard';

export const routes: Routes = [
    { path: '', component: Login, data: { hideHeader: true } },
    { path: 'main', component: Main, canActivate: [Authguard] },
    { path: 'list/:id', component: List, canActivate: [Authguard]},
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
