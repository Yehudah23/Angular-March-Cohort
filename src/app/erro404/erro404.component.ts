import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-erro404',
  imports: [RouterLink],
  templateUrl: './erro404.component.html',
  styleUrl: './erro404.component.css'
})
export class Erro404Component {
constructor(public route:Router){}
}
