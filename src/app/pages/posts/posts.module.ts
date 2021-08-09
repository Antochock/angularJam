import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsContainerComponent } from './components/posts-container/posts-container.component';


@NgModule({
  declarations: [
    PostsContainerComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
  ]
})
export class PostsModule { }
