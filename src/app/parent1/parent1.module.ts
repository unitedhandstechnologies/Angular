import { Parent2Module } from './../parent2/parent2.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';

@NgModule({
  declarations: [
    Component1Component
  ],
  imports: [
    CommonModule,
    Parent2Module
  ],
  exports:[
    Component1Component,
    Parent2Module
  ]
})
export class Parent1Module { }
