import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'reactive-forms',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((c) => c.SignUpComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];
