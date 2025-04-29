import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  // fullname='';
  // email=''
  public form:FormGroup;
  public form2:FormGroup;
  public form3:FormGroup;



  constructor(public formbuilder:FormBuilder){
    this.form=this.formbuilder.group({
      fullname:['', Validators.required],
      email:['',Validators.email],
      checkbox:['',Validators.requiredTrue],
    })

    
    this.form2=this.formbuilder.group({
      phoneNumber:['', Validators.required],
       address:['', Validators.required],
       
     })
   
   
     this.form3=this.formbuilder.group({
       birthDate:['', Validators.required],
       Gender:['', Validators.required],
     })
  }

  

  public handlesubmit(){
    // console.log(this.form.value['email']);
      // this.form.reset()
    // // this.form.controls['fullname'].setValue('')
    const formsdata ={...this.form.value,...this.form2.value,...this.form3.value,}
      console.log(formsdata);
   
    }
  }

  // public handlesubmit(){
  //   console.log(this.form.value['email']);
  //   this.form.reset()
  //   // this.form.controls['fullname'].setValue('')
  // }

  // public handlesubmit(){
  //   console.log(this.form.value['email']);
  //   this.form.reset()
  //   // this.form.controls['fullname'].setValue('')
  



