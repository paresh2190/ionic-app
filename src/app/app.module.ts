import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { UserListPage } from '../pages/user-list/user-list';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { PostListPage } from '../pages/post-list/post-list';
import { PostDetailsPage } from '../pages/post-details/post-details';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../providers/data.service';
import { AppCommonMethodsProvider } from '../providers/app-common-methods';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UserListPage,
    UserDetailsPage,
    PostListPage,
    PostDetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UserListPage,
    UserDetailsPage,
    PostListPage,
    PostDetailsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    AppCommonMethodsProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
