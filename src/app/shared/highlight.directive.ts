import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostListener('mouseover') mouseOver() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'green');
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.backgroundColor = 'green';
  }
  
  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = 'transparent';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    // this.elementRef.nativeElement.style.backgroundColor = 'transparent';
  }


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

}
