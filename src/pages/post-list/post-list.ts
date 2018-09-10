import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data.service';
import { PostDetailsPage } from '../post-details/post-details';
import { AppCommonMethodsProvider } from '../../providers/app-common-methods';


@Component({
  selector: 'page-post-list',
  templateUrl: 'post-list.html',
})
export class PostListPage {

  posts = [];
  constructor(private dataServ: DataService, public navCtrl: NavController, public navParams: NavParams, public appComm: AppCommonMethodsProvider) {
  }

  ionViewDidLoad() {
    this.appComm.showLoader();
    console.log('ionViewDidLoad postListPage', this.dataServ.getUsers());
    this.dataServ.getPosts().subscribe((data: any) => {
      console.log(data)
      this.posts = data
      this.appComm.hideLoader();
    },err=>{
      console.log(err);
      this.appComm.hideLoader();
    })
  }
  postSelected(post) {
    this.navCtrl.push(PostDetailsPage, { param: post })
  }

}
