import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { BehaviorSubject } from 'rxjs';
import { BehaviouralsubjectService } from '../behaviouralsubject.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public productservice:ProductService,public behaviour:BehaviouralsubjectService){}
  public array:any=[]
 
  data=''
 ngOnInit():void{
  this.array=this.productservice.getproduct()
  this.behaviour.data.subscribe((data)=>{
    console.log(data);
    this.data=data
    
  })
 }

 sendprov(item: any){
  this.behaviour.data.next((JSON.stringify(item)));
  console.log(item.name);
 }
 

}
