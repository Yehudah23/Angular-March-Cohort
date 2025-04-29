import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BehaviouralsubjectService } from '../behaviouralsubject.service';

@Component({
  selector: 'app-behaviouralsubject-2',
  imports: [],
  templateUrl: './behaviouralsubject-2.component.html',
  styleUrl: './behaviouralsubject-2.component.css'
})
export class Behaviouralsubject2Component {
 constructor(public behaviour:BehaviouralsubjectService){}
  data=''
  
 ngOnInit(){
  this.behaviour.data.subscribe((data)=>{
    console.log(data);
    this.data=data
    
  })
 }
}
