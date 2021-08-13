import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    TooltipDirective
  ],
  imports: [CommonModule],
  exports: [TooltipDirective],
})
export class DirectivesModule {}
