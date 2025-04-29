import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templatevalidation',
  imports: [FormsModule,CommonModule],
  templateUrl: './templatevalidation.component.html',
  styleUrl: './templatevalidation.component.css'
})
export class TemplatevalidationComponent {
firstname=''
email=''
}
