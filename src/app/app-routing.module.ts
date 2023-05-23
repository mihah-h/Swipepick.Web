import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {StartPageComponent} from "./start-page/start-page.component";
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {TestPageComponent} from "./test-page/test-page.component";
import {CreatingTestPageComponent} from "./creating-test-page/creating-test-page.component";
import {ProfileLayoutComponent} from "./shared/components/profile-layout/profile-layout.component";
import {StartLayoutComponent} from "./shared/components/start-layout/start-layout.component";
import {BeginPageComponent} from "./begin-page/begin-page.component";
import {InformationPageComponent} from "./information-page/information-page.component";
import {CreatingPageComponent} from "./creating-page/creating-page.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";


const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartLayoutComponent, children: [
      {path: '', component: StartPageComponent, pathMatch: 'full'},
      {path: 'information', component: InformationPageComponent},

    ]},
  {path: 'profile', component: ProfileLayoutComponent, children: [
      {path: '', component: ProfilePageComponent, pathMatch: 'full'},
      {path: 'creating', component: CreatingPageComponent},
      {path: 'creating-test', component: CreatingTestPageComponent},
      {path: 'settings', component: SettingsPageComponent},

    ]},
  {path: 'auth', component: AuthPageComponent},
  {path: 'begin', component: BeginPageComponent},
  {path: 'test/:id', component: TestPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
