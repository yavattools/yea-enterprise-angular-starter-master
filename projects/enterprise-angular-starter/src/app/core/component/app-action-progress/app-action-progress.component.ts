import { Component, OnInit, Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'yea-app-action-progress',
  templateUrl: './app-action-progress.component.html',
  styleUrls: ['./app-action-progress.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class AppActionProgressComponent implements OnInit {

  @Input() public visible = false;
  @Input() public pcolor: any = '#0f0';
  
  constructor() { }

  ngOnInit() {
  }


}
