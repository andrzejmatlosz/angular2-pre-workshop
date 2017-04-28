import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[myZoomText]'
})
export class ZoomTextDirective {
    @Input() myZoomText : boolean;

    constructor(private el: ElementRef, private renderer: Renderer) { }

    private previousFontSize = this.el.nativeElement.style.fontSize;

    @HostListener('mouseenter') onMouseEnter() {
        if (this.myZoomText) {
            this.previousFontSize = window.getComputedStyle(this.el.nativeElement, null).getPropertyValue('font-size'); 
            this.renderer.setElementStyle(this.el.nativeElement, 'font-size', '20px');
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        if (this.myZoomText) {
            this.renderer.setElementStyle(this.el.nativeElement, 'font-size', this.previousFontSize);
        }
    }
}