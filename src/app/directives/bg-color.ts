import { Directive, HostBinding, Input, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColor implements OnChanges {

  @Input() isCompleted: boolean = false;

  @HostBinding('style.backgroundColor') bgColor: string = '#93e793';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isCompleted']) {
      if (this.isCompleted) {
        this.bgColor = 'rgb(249, 154, 154)'; // Completed task color
      } else {
        this.bgColor = '#93e793'; // Incomplete task color
      }
    }
  }


}
