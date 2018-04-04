import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgIf } from '@angular/common';
import {DetailsPage} from '../details/details'
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';




export interface Result{
  id:number;
  overview:string;
  title: string;
  release_date:string;
}

const fakeResults: Result[] = [
  {id: 1, overview: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa", title: 'neoingroednog 1', release_date: '24/03/1992'},
  { id: 2, overview: "bbbbbbbbbbbbbbbbbbbbbbbbbbbb" ,title: 'neoingroednog 2', release_date: '24/03/1992'},
  { id: 3, overview: "cccccccccccccccccccccccccccc",title: 'neoingroednog 3', release_date: '24/03/1992'}
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Result[];
  pushPage = DetailsPage;

  constructor(public navCtrl: NavController) {
    this.results = fakeResults;
  }
onInput(ev:any){
  let val = ev.target.value;

  this.results = val ? fakeResults : [];
}

fetchResult(){

}

}



