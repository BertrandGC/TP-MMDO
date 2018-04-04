import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

export interface Result {
  title: string;
  author: string;
  date: string;
  image: string;
}

const fakeResults: Result[] = [
  { title: 'Vinel m a tuer', author: 'Vinel', date: '2018-03-22', image: 'https://cdn.discordapp.com/attachments/418058224290234389/425755567475392522/unknown.png' },
  { title: 'Panda', author: 'Panda', date: '2018-03-22', image:'https://static.lexpress.fr/medias_11568/w_2048,h_1146,c_crop,x_0,y_160/w_640,h_360,c_fill,g_north/v1509975901/panda-chine_5923268.jpg' }

];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: Result[];

  constructor(public navCtrl: NavController) {
    this.results = [];
  }

  getItems(ev: any ){
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.results = fakeResults;
    } else {
      this.results = [];
    }
  }

  goToOtherPage(item: any){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
