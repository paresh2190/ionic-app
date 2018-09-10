import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: any;
  password: any;
  show: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
    menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  submit() {
    if (this.username == "admin" && this.password == "admin") {
      console.log(this.username, this.password);
      console.log('successfull');
      let obj = {
        username: this.username,
        isLoggedIn: true
      };
      console.log(obj);
      localStorage.setItem('user', JSON.stringify(obj));
      this.navCtrl.setRoot(HomePage);
    }
    else {
      console.log('failed');
      this.show = true;
    }
  }

}
