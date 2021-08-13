import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public onAction: Subject<boolean>;

  constructor(private bsModalRef: BsModalRef) { }
  question: string;
  info: string;

  ngOnInit(): void {
    this.onAction = new Subject();
  }

  onClick(result){
    this.onAction.next(result);
    this.bsModalRef.hide();
  }

}
