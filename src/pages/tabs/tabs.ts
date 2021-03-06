import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { MarketPage } from '../market/market';
import { HomePage } from '../home/home';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MarketPage;

  constructor(public navCtrl: NavController) {
    //Ici nous disons a ionic quel est la page principale le loginPage
    if(!localStorage.getItem("token")) {
        //  navCtrl.setRoot(LoginPage);
        }
  }
}
