import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild',
  imports: [FormsModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css'
})
export class EventchildComponent {
@Input() public receivechild=''
public msg=''
@Output() public eventemitter= new EventEmitter
sendChat(){
  this.eventemitter.emit(this.msg)
  this.msg=''
}
}
