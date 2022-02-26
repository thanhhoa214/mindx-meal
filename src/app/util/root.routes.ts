import { Route } from '@angular/router';
import { LayoutComponent } from '../features/core/ui/layout/layout.component';

export const rootRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: []
  }
];
