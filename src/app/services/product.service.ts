import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public product = new BehaviorSubject ('products') 
  
  public products:any[]=[
    {
      id:1,
      name:'Bournvita',
      price:5000
    },
    {
      id:2,
      name:'Milk',
      price:4000
    },
    {
      id:3,
      name:'Cornflakes',
      price:9000
    },
    {
      id:4,
      name:'Coco pops',
      price:8000
    },
    {
      id:5,
      name:'Bread',
      price:7000
    }
  ]
  public productObj = new BehaviorSubject ('king judah') 

 

  public getproduct(){
    return this.products
  }
}
