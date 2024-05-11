import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BlockService } from '@etender-nx/block';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'ng-mf-market-entry',
  template: `<ng-mf-nx-welcome></ng-mf-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor(private blockService: BlockService) {
    blockService.sayHello();
  }
}
