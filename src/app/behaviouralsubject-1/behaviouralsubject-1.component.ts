import { Component } from '@angular/core';
import { Behaviouralsubject2Component } from '../behaviouralsubject-2/behaviouralsubject-2.component';
import { BehaviorSubject } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BehaviouralsubjectService } from '../behaviouralsubject.service';

@Component({
  selector: 'app-behaviouralsubject-1',
  imports: [Behaviouralsubject2Component,NavbarComponent,FormsModule],
  templateUrl: './behaviouralsubject-1.component.html',
  styleUrl: './behaviouralsubject-1.component.css'

})

export class Behaviouralsubject1Component {
  constructor(public behaviour:BehaviouralsubjectService){}
    message=''


    sendMsg(){
      this.behaviour.data.next(this.message)
      this.message=''
      console.log(this.message)
    }
}

