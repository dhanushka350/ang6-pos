import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as Material from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {DataTableModule} from 'angular-6-datatable';

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.NativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    DataTableModule,
    ReactiveFormsModule,
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.NativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    DataTableModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class MaterialModule {
}
