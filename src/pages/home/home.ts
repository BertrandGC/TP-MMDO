import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
<<<<<<< HEAD
import { DetailsPage } from '../details/details';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { API } from '../../app/tmdb';

export interface Result {
<<<<<<< HEAD
=======

export interface Result{
>>>>>>> c93cdfb4785a75fe2f3b0c096a6bbeb2bf598d2b
  title: string;
  author: string;
  date: string;
  image: string;
}

const fakeResults: Result[] = [
<<<<<<< HEAD
  { title: 'Vinel m a tuer', author: 'Vinel', date: '2018-03-22', image: 'https://cdn.discordapp.com/attachments/418058224290234389/425755567475392522/unknown.png' },
  { title: 'Panda', author: 'Panda', date: '2018-03-22', image:'https://static.lexpress.fr/medias_11568/w_2048,h_1146,c_crop,x_0,y_160/w_640,h_360,c_fill,g_north/v1509975901/panda-chine_5923268.jpg' }

=======
  { title: 'Hé salut', author: 'moi', date: '21/03/2018', image: 'https://dummyimage.com/600x400/000/00ffd5.png'},
  { title: 'Flower', author: '???', date: '21/03/2018', image: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' },
  { title: 'Loutre de combat', author: '???', date: '21/03/2018', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboEe2gL5vYuwyOd4sy0i9iVWf1JqJuXBZ934eL8fjkfk8Ojib' },
  { title: 'Hackerman', author: 'Hackerman', date: '21/03/2018', image: 'https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg' }
>>>>>>> c93cdfb4785a75fe2f3b0c096a6bbeb2bf598d2b
];
=======
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
>>>>>>> thibaut

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD
<<<<<<< HEAD
  results: Result[];
=======
  results: Observable<Result[]>;
>>>>>>> thibaut

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
=======
results:Result[];

constructor(public navCtrl: NavController) {
this.results=[];
}

  initializeItems(){
    this.results = fakeResults;
  }

  getItems(ev:any){

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.initializeItems();
      }else{
        this.results=[];
      }
>>>>>>> c93cdfb4785a75fe2f3b0c096a6bbeb2bf598d2b
  }

  fetchResults(query: string): Observable<Result[]>{
    return this.http.get<Result[]>('https://api.themoviedb.org/3/search/movie',{
      params: {"api_key":API, "query": query}
    }).pluck("results");
}

}
