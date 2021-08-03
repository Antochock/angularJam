import { Member } from './../models/member.model';
import { persons } from './../../mocks/people.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }
  persons: Member [] = persons;

  
  getId(): string{
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  }

  getImage(): string {
    let x = String(Math.floor(Math.random() * 100));
    return "https://randomuser.me/api/portraits/med/women/"+ x +".jpg"
  }

  addMember(member: Member):any{
    this.persons.push({...member, id: this.getId(), image: this.getImage()});
  }

  editMember(id: string, member: Member){
    const index = this.persons.findIndex((i)=> i.id==id);
    persons[index] = {...this.persons[index], ...member};
  }

  getMember(id:string){
    return this.persons.find((i)=> i.id==id);
  }
}
