import { Post } from './../../../../shared/models/post.model';
import { PostService } from './../../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  // posts$: Observable<Post[]>;
  posts$ = new BehaviorSubject(null);


  constructor(public postService: PostService) {
    // this.posts$ = postService.entities$;
    this.loading$ = postService.loading$;

   }

  ngOnInit(): void {

    this.postService.getPosts();
    this.postService.createPosts({title: 'New POST post'});
    this.postService.deletePosts('3');
    this.postService.updatePosts('2', {title: 'Put title'});


  //  this.getPosts();
  //  this.add({
  //    id: '1213',
  //    title: 'test title',
  //    text: 'test test'
  //  })
  //  this.update();
  }

  getPosts() {
    this.postService.getAll();
  }
  add(post: Post) {
    this.postService.add(post);
  }
  update(){
    this.postService.update({id:'1', title:'Updated title'})
  }



}
