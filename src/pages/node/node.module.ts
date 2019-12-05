import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NodePage } from './node';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    NodePage,
  ],
  imports: [
    IonicPageModule.forChild(NodePage),
    ComponentsModule
  ],
  exports: [
    NodePage,
  ]
})
export class NodePageModule {}
