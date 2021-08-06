import { PaginationService } from './../../../../shared/services/pagination.service';
import { TeamService } from './../../../../shared/services/team.service';
import { persons } from './../../../../mocks/people.mock';
import { Component, OnInit } from '@angular/core';
import { TableTitle } from 'src/app/shared/components/table/table-header/@types/table-header.model';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss']
})
export class TeamContainerComponent implements OnInit {

  
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
  params = {page:'team'};

  constructor(public teamService: TeamService, public pagination:PaginationService) { }

  ngOnInit(): void {
  }

}
