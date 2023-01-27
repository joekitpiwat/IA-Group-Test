import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-five',
  templateUrl: './article-five.component.html',
  styleUrls: ['./article-five.component.scss']
})
export class ArticleFiveComponent implements OnInit {
  arr: string[] = [];

  constructor() { }

  ngOnInit(): void {
    let midRow = 3;
    let row = 1;
    for (let i = midRow; i > 0; i--) {
      const text_row = " ".repeat(midRow + i) + row + "*".repeat((row - 1) * 2) + row;
      this.arr.push(text_row);
      row++;
    }
    for (let i = 0; i <= midRow; i++) {
      const text_row = " ".repeat(midRow + i) + row + "*".repeat((row - 1) * 2) + row;
      this.arr.push(text_row);
      row--;
    }

    console.log(this.arr.forEach(x => console.log(x)));
  }




}
