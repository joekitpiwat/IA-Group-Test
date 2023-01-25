import { Component, OnInit } from '@angular/core';
import { HEROS } from '../../models/model';

@Component({
  selector: 'app-my-heros',
  templateUrl: './my-heros.component.html',
  styleUrls: ['./my-heros.component.scss']
})
export class MyHerosComponent implements OnInit {

  heros: string[] = HEROS;
  heroSelected: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  selectHero(hero: string) {
    this.heroSelected = hero;
  }

}
