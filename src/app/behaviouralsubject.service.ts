import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviouralsubjectService {

  constructor() { }
  public data = new BehaviorSubject('king judah')
}


