import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appMask]'
})
export class MaskDirective {

  @Input()
  appMask: string ='';
  maskData: string ='*******';
  originalData:string='';

  constructor(private eleref:ElementRef) {
    console.log( ' From MaskDirective ');
   }


  @HostListener('mouseenter')
  mouseEnter(){
    console.log('enter')
    this.appMask=this.originalData;
    this.eleref.nativeElement.value=this.appMask;
  }

  @HostListener('mouseleave')
  mouseOut(){

    this.originalData=this.appMask;
    this.appMask=this.maskData;
    console.log('Mouse leave');
    this.eleref.nativeElement.value=this.appMask;
  }

  @HostListener('mouseover')
  mouseOver(){
    console.log('mouse over'+this.appMask);
  }

}