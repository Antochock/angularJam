import { Component, OnInit } from '@angular/core';
import { TableTitle } from 'src/app/shared/components/table/table-header/@types/table-header.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  tableHeaders: TableTitle[] = [
    {
      text: 'Name',
      visible: true,
    },
    {
      text: 'Title',
      visible: true,
    }, 
    {
    text: 'Status',
    visible: true,
  }, 
    {
    text: 'Role',
    visible: true,
  },
  {
    text: 'Edit',
    visible: false,
  },
  ]
  persons = [
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
    },
    {
      "name": "Jane Cooper",
      "title": "Frontend developer",
      "department": "Optimization",
      "role": "Admin",
      "email": "jane.cooper@example.com",
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
    },
    {
      "name": "Boy Lopez",
      "title": "Backend developer",
      "department": "Optimization",
      "role": "Member",
      "email": "roy.lopez@example.com",
      "image": "https://randomuser.me/api/portraits/med/men/90.jpg"
    },
  ]

  page: number = 1;
  pageSize: number = 2;

  constructor() { }



  ngOnInit(): void {
  }

  changePage(page: number) {
    this.page = page;
    console.log(page);
  }



}
