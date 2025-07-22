import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-toogle-button',
  standalone: false,
  templateUrl: './toogle-button.html',
  styleUrl: './toogle-button.css'
})
export class ToogleButton {

  @Input() darkMode: boolean = false;
  @Output() fire: EventEmitter<boolean> = new EventEmitter();

  fireToggle():void {
    this.darkMode = !this.darkMode;
    this.fire.emit(this.darkMode);
  }
}
