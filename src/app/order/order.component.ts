import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  details: any;

  constructor(private router: Router,public src : ServiceService) { }

  ngOnInit(): void {

    this.details = this.src.getorder();
    if(this.details=="undefined" || this.details == undefined || this.details == null || this.details =="null")
    {
      this.router.navigateByUrl("home");
    }
  
  }


  
  counter(i: number) {
    return new Array(i+1);
}


next()
{
  this.router.navigateByUrl("menu");
}


add()
{
  
}

}
