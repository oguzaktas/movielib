import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/movies'>Movie List</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/ratingsUpload'>IMDb Ratings (CSV) Upload</a></li>
        </ul>
    </nav>
    <div class='container-fluid'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Movie Library';
}
