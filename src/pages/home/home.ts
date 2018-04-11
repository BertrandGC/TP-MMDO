import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API } from '../../app/tmdb';

export interface Result {
  original_title: string;
  release_date: string;
  tagline: string;
  overview: string;
  poster_path: string;
}

// const fakeResults: Result[] = [
//   { original_title: 'Vinel m a tuer', release_date: '2018-03-22', tagline: 'Vive les maths',overview: 'Film destiné au eleve de Polytech',poster_path: 'https://cdn.discordapp.com/attachments/418058224290234389/425755567475392522/unknown.png' },
//   { original_title: 'Panda', release_date: '2018-03-22', tagline: 'Manger c est vivre', overview: 'Film qui montre la vie d un panda', poster_path:'https://static.lexpress.fr/medias_11568/w_2048,h_1146,c_crop,x_0,y_160/w_640,h_360,c_fill,g_north/v1509975901/panda-chine_5923268.jpg' }

// ];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Observable<Result[]>;

  constructor(public navCtrl: NavController,public http: HttpClient) {
    this.results = Observable.of([]);
  }

  getItems(ev: any ){
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.results = this.fetchResults(val);
    } else {
      this.results = Observable.of([]);
    }
  }

  goToOtherPage(item: any){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  fetchResults(query: string): Observable<Result[]>{
    return this.http.get<Result[]>('https://api.themoviedb.org/3/search/movie',{
      params: {"api_key":API, "query": query}
    }).pluck("results");
}

}
