import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLinkComponent } from './button-link/button-link.component';

@NgModule({
  declarations: [ButtonLinkComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonLinkComponent],
})
export class SharedModule {}
