import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,public src : ServiceService) { }

  ngOnInit(): void {
  }

  navigate(dish_name: any)
  {
    const group = {
      "dish_name" : dish_name,
    }

    this.src.setItem(group);
    
    this.router.navigateByUrl("dish");
  }

}
