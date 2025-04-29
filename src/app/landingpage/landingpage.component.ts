import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BehaviouralsubjectService } from '../behaviouralsubject.service';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  imports: [NavbarComponent,CommonModule,RouterLink,FormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

  constructor(public productservice:ProductService,public behaviour:BehaviouralsubjectService){}
    public Parray:any=[]
   
    data=''
   ngOnInit():void{
    this.Parray=this.productservice.getproduct()
    this.behaviour.data.subscribe((data)=>{
      console.log(data);
      this.data=data
      
    })
   }
  
   sendprov(item: any){
    this.behaviour.data.next((JSON.stringify(item.name +'' + item.id +''+ item.price +'')));
    console.log(item.name);
   }
   

}
