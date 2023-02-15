import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Triangle } from 'src/app/models/model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {

  form: FormGroup;
  area: number = 0;

  constructor(private fb: FormBuilder,
              private postService: PostService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      base: [0, Validators.required],
      height: [0, Validators.required],
    })
  }

  async onSubmit() {
    
    if(this.form.invalid){
      return this.form.markAllAsTouched(); //test
    };
    const body: Triangle = this.form.value;
    const res = await this.postService.CalTriangle(body);
    this.area = res.status ? res.area : 0
 
  }

  get f() {
    return this.form.controls;
  }
}
