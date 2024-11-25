import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'swapi-people-overview',
  standalone: true,
  imports: [CommonModule],
  template: `<p>people-overview works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleOverview {}
