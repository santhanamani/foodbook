import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user: any;

  order:any;

  constructor() { }

  setItem(user: any)
  {
    this.user = user;
    
  }

  getItem()
  {
      return this.user;
  }


  setorder(order:any)
  {
    this.order = order;
  }
  

  getorder()
  {
    return this.order;
  }

}
