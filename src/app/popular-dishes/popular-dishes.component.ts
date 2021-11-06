import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.scss']
})
export class PopularDishesComponent implements OnInit {

     test:any;
     check:any;

  dishes: any[] = [

  ];

  constructor(private _elementRef: ElementRef,private router: Router,public src : ServiceService) { 
    let native = this._elementRef.nativeElement;
     this.test = native.getAttribute("myattr");
     this.check = native.getAttribute("check");

     if(this.check==1)
     {
  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : Data pass the ts file to html file and show to values in ui design
  
  // ###################################################################
      this.dishes = [
        {
          "dish_img" : "grillimag.png",
          "dish_name" : "Tuscan Grilled",
          "dish_desc" : "Grilled chicken with provolone, artichoke hearts, and roasted red pesto"
        },
        {
          "dish_img" : "chicken2.png",
          "dish_name" : "Chicken",
          "dish_desc" : "Quick Teriyaki Chicken, Green Thai Curry Roast Chicken, Chicken Chow Mein"
        },
        {
          "dish_img" : "seafood.png",
          "dish_name" : "Seafood",
          "dish_desc" : "Easy As Aussie Barra Tacos, Green Thai Curry Salmon"
        },
        {
          "dish_img" : "pizza.png",
          "dish_name" : "Pizza",
          "dish_desc" : "Chilli Prawn Pizza, Perfect Pie Maker Pizzas"
        },
        
       
      ];
     }
     else if(this.check==2)
     {
      this.dishes = [
        {
          "dish_img" : "grillimag.png",
          "dish_name" : "Tuscan Grilled",
          "dish_desc" : "Grilled chicken with provolone, artichoke hearts, and roasted red pesto"
        },
        {
          "dish_img" : "chicken2.png",
          "dish_name" : "Chicken",
          "dish_desc" : "Quick Teriyaki Chicken, Green Thai Curry Roast Chicken, Chicken Chow Mein"
        },
        {
          "dish_img" : "seafood.png",
          "dish_name" : "Sea Food",
          "dish_desc" : "Easy As Aussie Barra Tacos, Green Thai Curry Salmon"
        },
        {
          "dish_img" : "pizza.png",
          "dish_name" : "Pizza",
          "dish_desc" : "Chilli Prawn Pizza, Perfect Pie Maker Pizzas"
        },  
        {
          "dish_img" : "briyani.png",
          "dish_name" : "Briyani",
          "dish_desc" : "Grilled chicken with provolone, artichoke hearts, and roasted red pesto"
        },
        {
          "dish_img" : "soup.png", 
          "dish_name" : "Soups",
          "dish_desc" : "Made with real veggies and the falvour will make one remember"
        },
        {
          "dish_img" : "Pastry.png",
          "dish_name" : "Pastry",
          "dish_desc" : "Pastry with original carrot's nutrition as it aint got any artificial"
        },
        {
          "dish_img" : "icecream.png",
          "dish_name" : "Icecream",
          "dish_desc" : "Freshly prepared icecream with an waffle in it to bring"
        },
        
       
      ];
     }

  }

  ngOnInit(): void {
  }


  dish_list(group:any)
  {
   
    this.src.setItem(group);
    this.router.navigateByUrl("dish");
  }

}
