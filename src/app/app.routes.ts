import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { AppsComponent } from './feature/apps/apps.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { authGuard } from './core/auth.guard';
import { BackupComponent } from './feature/backup/backup.component';
import { DashboardappsComponent } from './feature/dashboardapps/dashboardapps.component';
import { DashboardRHComponent } from './feature/dashboard-rh/dashboard-rh.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: AppsComponent , canActivate: [authGuard]},
    { path: 'backup', component: BackupComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
    {path: 'dashboard' , component:DashboardappsComponent},
    {path: 'dashboardRH' , component:DashboardRHComponent},
    { path: '**', component: PageNotFoundComponent }
];
