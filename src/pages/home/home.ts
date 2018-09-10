import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UserListPage } from '../user-list/user-list';
import { PostListPage } from '../post-list/post-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, menu: MenuController) {
    menu.enable(true);
  }
  userList(){
    this.navCtrl.push(UserListPage);
  }
  postList(){
    this.navCtrl.push(PostListPage);
  }
}
