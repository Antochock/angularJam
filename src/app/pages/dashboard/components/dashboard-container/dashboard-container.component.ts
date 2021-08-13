import { ModalComponent } from './../../../../shared/components/modal/modal/modal.component';
import { PaginationService } from './../../../../shared/services/pagination.service';
import { MemberService } from './../../../../shared/services/member.service';
import { persons } from './../../../../mocks/people.mock';
import { Component, OnInit } from '@angular/core';
import { TableTitle } from 'src/app/shared/components/table/table-header/@types/table-header.model';
import { BsModalService } from 'ngx-bootstrap/modal';

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
  params = {page:'dashboard'};


  constructor(public memberService: MemberService, public pagination: PaginationService, public modalService: BsModalService) { }

  ngOnInit(): void {
  }


openModal(){
  const initialState = {
    question: 'Open a modal with component',
    info: 'Modal with component'
  };
  const modal =  this.modalService.show(ModalComponent, {initialState});
  modal.content.onAction.subscribe(res =>{
    console.log(res);
  })
}

}
