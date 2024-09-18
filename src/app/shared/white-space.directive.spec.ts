import { WhiteSpaceDirective } from './white-space.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('WhiteSpaceDirective', () => {

  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() =>{
    elementRefMock = {
      nativeElement: document.createElement('div')
    };

    rendererMock = jasmine.createSpyObj('Renderer2', ['setProperty']);
  })

  it('should create an instance', () => {
    const directive = new WhiteSpaceDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
