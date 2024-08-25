import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';
export const routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
            }
        ]
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'sistemas',
                loadChildren: () => import('./features/sistemas/inspection.module').then(m => m.InspectionModule)
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'auth/login',
    }
];
//# sourceMappingURL=app.routes.js.map