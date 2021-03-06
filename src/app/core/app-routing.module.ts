import { TeamModule } from './../pages/team/team.module';
import { DashboardModule } from './../pages/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: ()=>
      import('../pages/dashboard/dashboard.module').then(
      (m) => m.DashboardModule),
  },
  {
    path: 'team',
    loadChildren: ()=>
      import('../pages/team/team.module').then(
      (m) => m.TeamModule),
  },
  {
    path: 'member',
    loadChildren: ()=>
      import('../pages/member-action/member-action.module').then(
      (m) => m.MemberActionModule),
  },
  {
    path: 'post',
    loadChildren: ()=>
      import('../pages/posts/posts.module').then(
      (m) => m.PostsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
