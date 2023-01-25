import { Component, OnInit } from '@angular/core';
import { HEROS, Heros } from '../models/heros';

@Component({
  selector: 'app-my-heros',
  templateUrl: './my-heros.component.html',
  styleUrls: ['./my-heros.component.scss']
})
export class MyHerosComponent implements OnInit {

  heros: Heros[] = HEROS;
  heroSelected: string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.heros);
  }


  selectHero(hero: string) {
    this.heroSelected = hero;
  }

}
