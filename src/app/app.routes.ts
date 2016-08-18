import { provideRouter, RouterConfig }  from '@angular/router';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { MyMapsProjectComponent } from './my-maps-project/my-maps-project.component';

const routes: RouterConfig = [
  {
    path: 'puzzle',
    component: PuzzleComponent
  },
  {
    path: 'map',
    component: MyMapsProjectComponent
  },
{
  path: '',
  redirectTo: '/puzzle',
  pathMatch: 'full'
},

];

export const appRouterProviders = [
  provideRouter(routes)
];
