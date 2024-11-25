import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PeopleOverview } from '@swapi-angular/swapi-people-feature-people';

@Component({
  standalone: true,
  imports: [PeopleOverview, RouterModule],
  selector: 'swapi-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'swapi-angular';
}
