import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//pages
//import { InscriptionPage } from '../inscriptionPage/inscriptionpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slideData = [{ image: "assets/imgs/slide-1.jpg" },
                { image: "assets/imgs/slide-2.jpg" },
                  { image: "assets/imgs/slide-3.jpg" }];
  constructor(public navCtrl: NavController) {

  }
  private showInscriptionPage(){
    //this.navCtrl.push(InscriptionPage);
  }


}
