import { PaginationService } from './../../../../shared/services/pagination.service';
import { MemberService } from './../../../../shared/services/member.service';
import { persons } from './../../../../mocks/people.mock';
import { Component, OnChanges, OnInit } from '@angular/core';
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
      text: 'Adress',
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
  persons = persons;

  constructor(public memberService: MemberService, public pagination: PaginationService) { }

  ngOnInit(): void {
  }




}
