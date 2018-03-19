import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//pages
import { InscriptionPage } from '../inscriptionPage/inscriptionpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  private showInscriptionPage(){
    this.navCtrl.push(InscriptionPage);
  }

//  IdentificationCtrl() {
  //push another page onto the history stack
  //causing the nav controller to animate the new page in
//  this.navCtrl.push(InscriptionPage);
//}

}
