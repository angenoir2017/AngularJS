import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
//import "rxjs/add/operator/map"


@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {
  motCle:string="";
  localhost:string="localhost";
  image:any;

  contact={
    name:'pic',
    prenom:'pexel',
  image:'assets/imgs/test.jpg'
  }
  constructor(public navCtrl: NavController,http: Http) {

  }


}
