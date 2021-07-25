import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jam-firt-lesson';
  people = [
    {
      "name": "Jane Cooper",
      "title": "Frontend developer",
      "department": "Optimization",
      "role": "Admin",
      "email": "jane.cooper@example.com",
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
      "name": "Roy Lopez",
      "title": "Backend developer",
      "department": "Optimization",
      "role": "Member",
      "email": "roy.lopez@example.com",
      "image": "https://randomuser.me/api/portraits/med/men/90.jpg"
    }
  ]
}
