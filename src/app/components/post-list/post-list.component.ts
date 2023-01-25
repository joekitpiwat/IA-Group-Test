import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postService: PostService) { }

  async ngOnInit() {
    await this.loadPosts();
  }

  async loadPosts() {
    const res = await this.postService.getPosts();
    this.posts = res;
  }

}
