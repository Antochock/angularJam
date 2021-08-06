import { Member } from './../../../models/member.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-td',
  templateUrl: './table-td.component.html',
  styleUrls: ['./table-td.component.scss']
})
export class TableTdComponent implements OnInit {

  @Input() person: Member;
  @Input() params;
  constructor(
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
  }

}
