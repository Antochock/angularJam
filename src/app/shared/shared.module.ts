import { TeamService } from './services/team.service';
import { PaginationService } from './services/pagination.service';
import { MemberService } from './services/member.service';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, ServicesModule, DirectivesModule, ReactiveFormsModule],
  exports: [CommonModule, ComponentsModule, ServicesModule, DirectivesModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService, PaginationService, TeamService],
    };
  }
}
