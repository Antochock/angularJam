import { Member } from './../../../models/member.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.scss']
})
export class TableTdComponent implements OnInit {

  @Input() person: Member;

  constructor() { }

  ngOnInit(): void {
  }

}
