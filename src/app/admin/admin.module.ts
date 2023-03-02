import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMoviesComponent } from './components/admin-movies/admin-movies.component';
import { AdminSessionsComponent } from './components/admin-sessions/admin-sessions.component';

import { TableModule } from 'primeng/table';
import { ContextMenuModule } from "primeng/contextmenu";
import { SharedModule } from "../shared/shared.module";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { ToolbarModule } from "primeng/toolbar";
import { RippleModule } from "primeng/ripple";
import { FileUploadModule } from "primeng/fileupload";
import { DialogModule } from "primeng/dialog";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { RatingModule } from "primeng/rating";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { AdminComponent } from './components/admin/admin.component';

@NgModule( {
  declarations: [
    AdminMoviesComponent,
    AdminSessionsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    TableModule,
    ContextMenuModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    RippleModule,
    FileUploadModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule
  ]
} )
export class AdminModule {
}
