import { MemberActionContainerComponent } from './components/member-action-container/member-action-container.component';
import { MemberActionRoutingModule } from './member-action-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MemberActionContainerComponent
  ],
  imports: [
    CommonModule,
    MemberActionRoutingModule,
    SharedModule,
  ]
})
export class MemberActionModule { }
