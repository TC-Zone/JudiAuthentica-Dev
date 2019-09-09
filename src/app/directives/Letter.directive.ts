import { Directive, ElementRef, HostListener } from "@angular/core";
import { GlobalVariable } from "app/shared/helpers/global-variable";

@Directive({
  selector: "[letterOnly]"
})
export class LetterOnly {

  private globalVariable: GlobalVariable = new GlobalVariable();

  private regex: RegExp = new RegExp(this.globalVariable.validators.regex._Letter);
  private specialKeys: Array<string> = ["Backspace", "Tab", "End", "Home", "ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"];
  private shortcut: Array<string> = ["A", "a", "C", "c", "X", "x"];

  constructor(private el: ElementRef) { }

  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    
    // if specialKeys or shortcut
    if (this.specialKeys.indexOf(event.key) !== -1 || ((this.shortcut.indexOf(event.key) !== -1) && event.ctrlKey)) {
      return;
    }

    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);

    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }

  }
}
