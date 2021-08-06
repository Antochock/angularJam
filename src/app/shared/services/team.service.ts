import { persons } from './../../mocks/people.mock';
import { Member } from './../models/member.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(){}

  persons$ = new BehaviorSubject<Member[]>([...persons]);

  
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
    this.persons$.next([...this.persons$.getValue(), {...member, id: this.getId(), image: this.getImage()}]);
  }

  editMember(id: string, member: Member){
    const index = this.persons$.getValue().findIndex((i)=> i.id==id);
    persons[index] = {...this.persons$.value[index], ...member};
  }

  getMember(id:string){
    return this.persons$.getValue().find((i)=> i.id==id);
  }
}
