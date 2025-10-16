import { Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/wheather/Page/weather-home/weather-home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherHomeComponent
  }
];
