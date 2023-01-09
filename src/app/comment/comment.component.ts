import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { CommentService } from './comment.service';



@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private commentService:CommentService) { }





  ngOnInit(): void {
      this.getComments();
  }

  comments!:any[]
  getComments(){
    this.commentService.getComments().subscribe((res:any)=>{
        this.comments=[...res.posts];
       });
  }


}
