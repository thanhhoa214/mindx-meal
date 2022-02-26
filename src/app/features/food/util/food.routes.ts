import { Route } from '@angular/router';

export const foodRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('../feature/food-list/food-list.module').then(m => m.FoodListModule)
  }
];
