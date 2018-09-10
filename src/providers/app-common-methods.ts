import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
@Injectable()
export class AppCommonMethodsProvider {
    loading:any;
    constructor(public loadingCtrl: LoadingController){
        console.log('Hello AppCommonMethodsProvider Provider');
    }
    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    }
    hideLoader(){
        
        setTimeout(() => {
            this.loading.dismiss();
        }, 500);
    }
}