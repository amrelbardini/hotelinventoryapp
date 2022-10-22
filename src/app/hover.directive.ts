import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  color:string='red';

  constructor(private element:ElementRef) {

   }

  ngOnInit(): void {
      this.element.nativeElement.style.backgroundColor='#eee';
  }

}
