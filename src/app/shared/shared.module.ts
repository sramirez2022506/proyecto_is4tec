// app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteSpaceDirective } from './white-space.directive';

@NgModule({
  declarations: [
    WhiteSpaceDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    WhiteSpaceDirective,
    ReactiveFormsModule 
  ]
})
export class SharedModule { }
