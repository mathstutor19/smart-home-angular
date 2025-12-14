import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({ selector: '[appHighlightOn]' })
export class HighlightOnDirective implements OnChanges {
  @Input('appHighlightOn') isOn: boolean = false;
  constructor(private el: ElementRef) {}
  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.isOn ? 'rgba(0,255,0,0.1)' : 'transparent';
  }
}
