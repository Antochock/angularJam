import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
  namefield = ['Name','Title','Status','Role']
  constructor() { }

  ngOnInit(): void {
  }

}
