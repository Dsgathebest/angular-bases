import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'app-counter.html'
})

export class NameComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  public conter: number = 10;

  increaseBy():void {
    this.conter+=1;
  }
  decrementBy(): void {
    this.conter-=1;
  }
  resetCounter():void {
    this.conter = 10;
  }
}
