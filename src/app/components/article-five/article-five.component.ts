import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-five',
  templateUrl: './article-five.component.html',
  styleUrls: ['./article-five.component.scss']
})
export class ArticleFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const l = 11;
    // let space = ' ';
    // let star = '*';
    // let i = 1;
    // let k;
    // let n = 0;

    // while (i <= l) {
    //   k = (l - i) / 2;
    //   console.log(space.repeat(k) + star.repeat(i));
    //   i = i + 2;
    // }

    // while (i >= l) {
    //   k = (i - l) / 2;
    //   n = i - (4 * k);
    //   if (n > 0) {
    //     console.log(space.repeat(k) + star.repeat(n));
    //   } else { break; }
    //   i = i + 2;
    // }
    const n = 7;
    let c = 1;
    
    // Array.from(Array(~-n / 2 | 0), (_, i) => " ".repeat(i + 1) + "*".repeat(n + ~i * 2))
    //   .reduce((a, c) => [c, ...a, c], ["*".repeat(n)])
    //   .forEach(l => console.log(l))
  }

}
