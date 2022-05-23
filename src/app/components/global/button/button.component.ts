import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() buttonClass!: string;
  constructor() {}

  moreCategories() {
    console.log('clicked');
  }

  ngOnInit(): void {}
}
