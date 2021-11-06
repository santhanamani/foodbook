import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private router: Router,public src : ServiceService) { }

  ngOnInit(): void {
  }


  

// ##################################################################
// Creator name :- SANTHANAMANI S
// CREATE DATE:-3/11/2021
// DESCRIPTION : Navigate another page call use for this function call

// ###################################################################
 
  navigate(dish_name: any)
  {
    const group = {
      "dish_name" : dish_name,
    }

    this.src.setItem(group);
    
    this.router.navigateByUrl("dish");
  }

}
