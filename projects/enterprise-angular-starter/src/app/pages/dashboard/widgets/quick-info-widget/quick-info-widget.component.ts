import { Component, Input, OnInit } from '@angular/core';
import { QuickInfoWidgetOptions } from './quick-info-widget.model';

@Component({
  selector: 'yea-quick-info-widget',
  templateUrl: './quick-info-widget.component.html',
  styleUrls: ['./quick-info-widget.component.scss']
})
export class QuickInfoWidgetComponent implements OnInit {
  @Input() value: string;
  @Input() label: string;
  @Input() background: string;
  @Input() color: string;

  @Input() icon: string;

  @Input() options: QuickInfoWidgetOptions;

  constructor() {}

  ngOnInit() {
    // console.log(this.options.label + this.options);
    debugger;
  }
}
