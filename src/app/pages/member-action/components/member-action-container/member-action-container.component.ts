import { TeamService } from './../../../../shared/services/team.service';
import { State } from './../../../../shared/models/state.model';
import { MemberService } from './../../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss']
})
export class MemberActionContainerComponent implements OnInit {

  form: FormGroup;
  state: State;
  actionTitle: string;
  page: string;

  constructor(private router: Router,
     private formBuilder: FormBuilder,
     public memberService: MemberService,
     public activatedRoute: ActivatedRoute,
     private teamService: TeamService) { }

  ngOnInit(): void {
    this.initView();
    this.initForm();
  }

  initView(){
    this.state = this.activatedRoute.snapshot.data.state;
    this.page = this.activatedRoute.snapshot.queryParams.page;
    this.actionTitle = this.state === State.Create ? 'Create' : 'Update';
  }


  initForm(): void{
    this.form = this.formBuilder.group(
      {
        firstName: this.formBuilder.control(null,[Validators.required]),
        lastName: this.formBuilder.control(null,[Validators.required]),
        image: this.formBuilder.control(null,),
        email: this.formBuilder.control(null,[Validators.required]),
        title: this.formBuilder.control(null,[Validators.required]),
        country: this.formBuilder.control(null),
        streetAdress: this.formBuilder.control(null),
        city: this.formBuilder.control(null),
        state: this.formBuilder.control(null),
        zip: this.formBuilder.control(null),
      }
    )
    if (this.state === State.Edit){
      const member = this.getMember(this.activatedRoute.snapshot.params.id)
      this.form.patchValue(member);
    }
  }
  
  action(): void{
    if (this.state === State.Edit){
      this.editMember(this.activatedRoute.snapshot.params.id, this.form.value);
    }else{
    this.addMember(this.form.value);}
    this.router.navigate([`/${this.page}`])
  }

  addMember(data){
    this.actionService().addMember(data)
  }
  editMember(id: string, data){
    this.actionService().editMember(id, data);
    
  }
  getMember(id: string){ 
    return this.actionService().getMember(id);    
  }

  actionService() {
    let action;
    switch (this.page){
      case 'dashboard':
        action = this.memberService;
        break;
      case 'team':
        action = this.teamService;
        break;
    }
    return action;
  }


}
