import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data.service';
import { UserDetailsPage } from '../user-details/user-details';
import { AppCommonMethodsProvider } from '../../providers/app-common-methods';


@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  users=[];
  constructor(private dataServ: DataService, public navCtrl: NavController, public navParams: NavParams, public appComm: AppCommonMethodsProvider) {
  }
  
  ionViewDidLoad() {
    this.appComm.showLoader();
    console.log('ionViewDidLoad UserListPage', this.dataServ.getUsers());
    this.dataServ.getUsers().subscribe((data:any)=>{
      console.log(data)
      this.users=data
      this.appComm.hideLoader();
    },err=>{
      console.log(err);
      this.appComm.hideLoader();
    });
  }
  userSelected(user){
    this.navCtrl.push(UserDetailsPage,{param:user})
  }

}
