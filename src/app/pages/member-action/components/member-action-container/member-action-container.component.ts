import { InputInfo } from './@types/member-action-container.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss']
})
export class MemberActionContainerComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  formField: InputInfo[]= [{
      name: 'first-name',
      title: 'First Name',
      type: 'text',
      formControl: 'firstName',
  }
  {
    name: 'last-name',
    title: 'Last Name',
    type: 'text',
    formControl: 'lastName',
}
{
  name: 'email-adress',
  title: 'Email Adress',
  type: 'text',
  formControl: 'firstName',
}
{
  name: 'first-name',
  title: 'First Name',
  type: 'text',
  formControl: 'firstName',
}
{
  name: 'first-name',
  title: 'First Name',
  type: 'text',
  formControl: 'firstName',
}
{
  name: 'first-name',
  title: 'First Name',
  type: 'text',
  formControl: 'firstName',
}
{
  name: 'first-name',
  title: 'First Name',
  type: 'text',
  formControl: 'firstName',
}
{
  name: 'first-name',
  title: 'First Name',
  type: 'text',
  formControl: 'firstName',
}    
]

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.form = this.formBuilder.group(
      {
        firstName: this.formBuilder.control(null),
      }
    )
  }
  action(){
    console.log(this.form.value);
  }

}
