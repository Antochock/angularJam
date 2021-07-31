import { Component, Input, OnInit } from '@angular/core';
import { Persons } from './@types/table-td.model';

@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.scss']
})
export class TableTdComponent implements OnInit {

  @Input() person: Persons;

  constructor() { }

  ngOnInit(): void {
  }

}
