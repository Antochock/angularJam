import { PaginationService } from './../../../services/pagination.service';
import { Member } from './../../../models/member.model';
import { Component, Input, OnInit, } from '@angular/core';




@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss']
})
export class TableFooterComponent implements OnInit {

  @Input() person: Member[];
  page = this.pagination.page;
  pageSize = this.pagination.pageSize;

  constructor(public pagination: PaginationService) { }

  ngOnInit(): void {
  }
  pageChange(page:number){
    this.pagination.pageChange(page);
  }
  lastItem(person){
    return this.pagination.lastItem(person);
  }
  firstItem(){
    return this.pagination.firstItem();
  }

}
