import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'yea-toolbar-search',
  templateUrl: './toolbar-search.component.html',
  styleUrls: ['./toolbar-search.component.scss']
})
export class ToolbarSearchComponent implements OnInit {
  isOpen: boolean;

  @ViewChild('input', { read: ElementRef, static: false }) input: ElementRef;

  constructor() {}

  ngOnInit() {}

  open() {
    this.isOpen = true;

    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 100);
  }

  close() {
    this.isOpen = false;
  }
}
