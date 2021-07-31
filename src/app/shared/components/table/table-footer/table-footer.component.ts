import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Persons } from '../table-td/@types/table-td.model';



@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  @Input() page: number;
  @Input() pageSize: number;
  @Input() person: Persons[];
  @Output() pageEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  pageChange(page:number){
    this.pageEvent.emit(page);
  }

}
