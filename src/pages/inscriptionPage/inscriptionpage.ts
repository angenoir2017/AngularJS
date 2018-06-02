import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'inscriptionpage.html'
})
export class InscriptionPage {
//  readonly POST_URL='http://localhost:3000/api/compte/create';

  constructor(public navCtrl: NavController ) {
  }

  /*ajouterCompte(nom, prenom, code, confCode, account, type, solde){

  const anAccount ={
      nom: nom,
      prenom: prenom,
      code: code,
      account: account,
      type : type,
      solde: solde
  };
  if(code == confCode){

  this.http
      .post(this.POST_URL, anAccount)
      .subscribe(res =>{
        console.log(res);
      },
    err=>{
      console.log(err);
    });
  }

}*/

}
