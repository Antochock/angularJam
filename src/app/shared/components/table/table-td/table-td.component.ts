import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.scss']
})
export class TableTdComponent implements OnInit {

  @Input() person: {
      "name": string,
      "title": string,
      "department": string,
      "role": string,
      "email": string,
      "image": string,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
