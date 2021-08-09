import { ApiService } from './api.service';
import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { BehaviorSubject } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostService extends EntityCollectionServiceBase<Post> {

  posts$ = new BehaviorSubject(null)

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory, private apiService: ApiService) {
    super('Posts', serviceElementsFactory);

  }

  getPosts(params?: Params, refresh?: boolean){
    if(refresh && this.posts$.getValue()){
      return;
    }
    this.apiService.get<Post[]>('posts', params).subscribe(data => {
      this.posts$.next(data);
    });
  }
  createPosts(data){
    this.apiService.post('posts', data).subscribe(res=>{ 
      this.posts$.next([...this.posts$.getValue(), res]);
    });
  }
  updatePosts(id, data){
    this.apiService.put('posts', id, data).subscribe(res=>{ 
      const index = this.posts$.getValue().findIndex((i)=> i.id==id);
      const updatePosts = this.posts$.getValue();
      updatePosts[index]= res;
      this.posts$.next(updatePosts);
    });
  }
  deletePosts(id){
    this.apiService.delete('posts', id).subscribe(()=>{
      const index = this.posts$.getValue().findIndex((i)=> i.id==id);
      const deletedPosts = this.posts$.getValue();
      deletedPosts.splice(index, 1);
      this.posts$.next(deletedPosts);

    });
  }

}
