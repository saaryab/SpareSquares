import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cards = [
    [
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
  ],[
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
  ],[
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
    {
      symbols: ['@','#','$','%'],
      rotation: 0,
    },
  ]
  ];
  symbols = ['@','#','$','%'];
  constructor(public navCtrl: NavController) {

  }

}
