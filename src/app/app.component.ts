import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';

interface User{
  fullname:string,
  lastname:string,
  age:number
  
  
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle, NgClass, NavbarComponent, HeroComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'King';
 public c='purple'
 public box=true

 public firstname =''
 public lastname :string='King'
public age: undefined;
public num: number=76

public objone:{
  name:string,
  age:number,
  address:string
}={
  name:'Judah',
  age:90,
  address:'Ogbomosho'

}

public objtwo:User={
  fullname:'',
  lastname: '',
  age:68

}





 changeBox(){
  let x;
  x=78
  this.lastname= 'Judah'
  // this.box=!this.box
  // alert('working');
 }

 tit=''
 content=''
 date= new Date().toLocaleDateString()
 time=new Date().toLocaleTimeString()

 note(){
  alert(this.date+this.time)

  let obj={
    title: this.tit,
    content: this.content,
    date:this.date,
    time:this.time
  } 
  alert(obj+this.tit+this.content)
 }
}
