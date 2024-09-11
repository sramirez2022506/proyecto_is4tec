import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWhiteSpace]'
})
export class WhiteSpaceDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  @HostListener('input') onInput(){
    const trimmedText = this.el.nativeElement.innerText.trim();
    this.renderer.setProperty(this.el.nativeElement, 'innerText', trimmedText);
  }

}
