import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  constructor() { }

  sayHello(): void {
    console.log('Hello from Block service')
  }
}
