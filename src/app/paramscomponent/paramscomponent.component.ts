import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { BehaviouralsubjectService } from '../behaviouralsubject.service';

@Component({
  selector: 'app-paramscomponent',
  imports: [CommonModule],
  templateUrl: './paramscomponent.component.html',
  styleUrl: './paramscomponent.component.css'
})
export class ParamscomponentComponent {
  constructor(public actroute:ActivatedRoute, public router:Router,public productservice:ProductService,public behaviour:BehaviouralsubjectService){}

    data=''
 
public product:any=''
  ngOnInit(){
    let actr = this.actroute
    let actnumber=actr.snapshot.params['id']
    this.product=this.productservice.getproduct().find((product)=>product.id==actnumber)
    console.log(this.product);
}
  
    
    signin(){
      this.router.navigate(['/signin'])
    }



  // constructor(public behaviour:BehaviouralsubjectService){}
  
    
  //  ngOnInit(){
  //   this.behaviour.data.subscribe((data)=>{
  //     console.log(data);
  //     this.data=data
      
  //   })
  //  }
  }
  


