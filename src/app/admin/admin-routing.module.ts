import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminMoviesComponent } from "./components/admin-movies/admin-movies.component";
import { AdminSessionsComponent } from "./components/admin-sessions/admin-sessions.component";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'movies', component: AdminMoviesComponent },
  { path: 'sessions', component: AdminSessionsComponent }

];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
} )
export class AdminRoutingModule {
}
