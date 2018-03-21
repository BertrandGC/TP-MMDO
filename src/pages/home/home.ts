import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

export interface Result{
  title: string;
  author: string;
  date: string;
  image: string;
}

const fakeResults: Result[] = [
  { title: 'Hé salut', author: 'moi', date: '21/03/2018', image: 'https://dummyimage.com/600x400/000/00ffd5.png'},
  { title: 'Flower', author: '???', date: '21/03/2018', image: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb' },
  { title: 'Loutre de combat', author: '???', date: '21/03/2018', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQboEe2gL5vYuwyOd4sy0i9iVWf1JqJuXBZ934eL8fjkfk8Ojib' },
  { title: 'Hackerman', author: 'Hackerman', date: '21/03/2018', image: 'https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg' }
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  }

}
