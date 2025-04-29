import { Component } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventemitter',
  imports: [EventchildComponent,FormsModule],
  templateUrl: './eventemitter.component.html',
  styleUrl: './eventemitter.component.css'
})
export class EventemitterComponent {
msg=''
newMsg=''
public data=''
sendChat(){
  console.log(this.msg)
  this.newMsg=this.msg;
}
receivedata(data:string){
  console.log(data);
  this.data=data
}
}
