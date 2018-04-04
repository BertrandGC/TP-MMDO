import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { Result } from '../home/home';

=======
>>>>>>> c93cdfb4785a75fe2f3b0c096a6bbeb2bf598d2b

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
<<<<<<< HEAD
  item: Result;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('item');
=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
>>>>>>> c93cdfb4785a75fe2f3b0c096a6bbeb2bf598d2b
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
