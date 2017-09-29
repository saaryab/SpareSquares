import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalScore = 0;
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

  scoreCard(card, i, j){
    let total = [];
    const T = 0, R = 1, B = 2, L = 3;
    const index = (originalIndex, c) => 4 - ((4 + c.rotation - originalIndex) % 4);
    const symbol = (originalIndex, c?) => (c || card).symbols[index(originalIndex, (c || card))];
    total[T] = this.cards[i-1] && this.cards[i-1][j] && symbol(T) === symbol(B, this.cards[i-1][j]) ? 1 : 0;
    total[R] = this.cards[i][j+1] && symbol(R) === symbol(L, this.cards[i][j+1]) ? 1 : 0;
    total[B] = this.cards[i+1] && this.cards[i+1][j] && symbol(B) === symbol(T, this.cards[i+1][j]) ? 1 : 0;
    total[L] = this.cards[i][j-1] && symbol(L) === symbol(R, this.cards[i][j-1]) ? 1 : 0;
    // console.log(i,j,total.toString());
    
    return total.reduce((a,b)=>a+b);
  }

  score(){
    let totalScore = 0;
    for(let i = 0; i<this.cards.length; i++){
      for(let j = 0; j<this.cards[i].length; j++){
        totalScore += this.scoreCard(this.cards[i][j],i,j);
      }
    }
    this.totalScore = totalScore;
    return totalScore;
  }

}
