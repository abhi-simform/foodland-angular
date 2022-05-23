import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.scss'],
})
export class HeartComponent implements OnInit {
  isfavourite: boolean = false;
  changefavorite() {
    this.isfavourite = !this.isfavourite;
    console.log(this.isfavourite);
  }
  constructor() {}

  ngOnInit(): void {}
}
