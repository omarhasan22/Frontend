import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { FirstListComponent } from './parfumes/first-list/first-list.component';
import { AppComponent } from './app.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'account', loadChildren: accountModule, },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'Parfumes', loadChildren: () => import('./parfumes/parfumes.module').then(m => m.ParfumesModule) },
    // { path:'perfumeProfile/:id', component: FirstListComponent},
    // otherwise redirect to home
    { path: '**', component: HomeComponent }
];
// , {useHash: true}
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
