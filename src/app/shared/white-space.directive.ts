import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective implements OnChanges {

  @Input('appWhiteSpace') textValue: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.textValue.trim());
  }

}
