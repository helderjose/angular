import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: "[appInputFormat]"
})
export class InputFormatDirective {
  //"appInputFormat" é o nome dado no app.component.html
  @Input("appInputFormat") format;

  constructor(private el: ElementRef) {}

  @HostListener("blur")
  onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == "lowercase")
      this.el.nativeElement.value = value.toLowerCase();
    else this.el.nativeElement.value = value.toUpperCase();
  }

  @HostListener("focus")
  onFocus() {
    //apenas para mostrar funcionando
    console.log("on focus");
  }
}
