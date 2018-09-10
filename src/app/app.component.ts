import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UserListPage } from '../pages/user-list/user-list';
import { PostListPage } from '../pages/post-list/post-list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
 

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
   

    var aKey = JSON.parse(localStorage.getItem('user'));

    if (aKey == null) {
      this.rootPage = LoginPage
    }
    else if (aKey.username === 'admin' && aKey.isLoggedIn === true) {
      this.rootPage = HomePage
    }
    else {
      this.rootPage = LoginPage
    }

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'User List', component: UserListPage },
      { title: 'Post List', component: PostListPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logOut() {
    localStorage.clear();
    console.log('clear log');
    this.nav.setRoot(LoginPage);
  }
}
