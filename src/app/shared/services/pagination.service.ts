import { Member } from './../models/member.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  page: number = 1;
  pageSize: number = 4;

  pageChange(page:number){
    this.page = page;
  }
  lastItem(person: Member []): string{
    if (person.length<this.pageSize) {return String(person.length);}
    if (this.page = 1) {return String(this.pageSize);}
    if (this.page <= Math.ceil(person.length/this.pageSize)){return String(this.page*this.pageSize)}
    else{
    return String(person.length);
    }
  }
  firstItem(): string{
    if(this.page == 1) return '1';
    return String((this.page-1) * this.pageSize + 1);
  }

  constructor() { }
}
