import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-api',
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class APIComponent {
  title= '';
  cont='';
  constructor(public http:HttpClient){}
// ngOnInit(){
//   this.http.get('https://api.github.com.users').subscribe((data=>{
//     console.log(data);
//   },
// (error)=>{
//   console.log(error);
// }))
// }

ngOnInit(){
  this.http.get('http://localhost/PHPMarchCohort/get_music.php').subscribe((dataa)=>{
    console.log(dataa);
  },
(error)=>{
  console.log(error);
})
}

sendBlog(){
  let data = {
   title: this.title, 
   content: this.cont,
  }
console.log(data);


this.http.post('http://localhost/PHPMarchCohort/music_title.php', data).subscribe((info)=>{
  console.log(info);
})

}
  

}
