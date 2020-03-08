import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yea-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent implements OnInit {

  @Input() isLoading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
