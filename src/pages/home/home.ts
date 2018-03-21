import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';





export interface Result{
  title: string;
  author:string;
  img:string;
}

const fakeResults: Result[] = [
  { title: 'neoingroednog 1', author: ' John 1', img:'assets/imgs/pers1.png'},
  { title: 'neoingroednog 2', author: ' John 2', img: 'assets/imgs/pers2.png' },
  { title: 'neoingroednog 3', author: ' John 3', img: 'assets/imgs/pers3.jpg' }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Result[];
  constructor(public navCtrl: NavController) {
    this.results = fakeResults;
  }

}
