import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : Data pass the ts file to html file and show to values in ui design
  
  // ###################################################################
  
  price = [
    {
      "price_name" : " Up to ₹150",
    },
    {
      "price_name" : "₹150 – ₹300",
    },
    {
      "price_name" : "Over ₹1,500",
    },
    

  ];

  star = [

    {
      "star_count" : 4,
    },
    {
      "star_count" : 3,
    },
    {
      "star_count" : 2,
    },
    {
      "star_count" : 1,
    },
    

  ];

    // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : main product show operation will be the use for the array objects
  
  // ###################################################################

  dishes_details = [
    {
      "category_name" : "Chicken",
      "dish_name" : "Grilled Tuscan Chicken Breast",
      "amount" : 700,
      "star" : 4,
      "dish_desc" : "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
      "customer_review":"Was expecting an normal grill but this is an absolute delite, don't forget to ask their special",
      "image":"tuscan-chicken.jpg"
    },
    {
      "category_name" : "Chicken",
      "dish_name" : " Amritsari Chicken Masala",
      "amount" : 300,
      "star" : 4.5,
      "dish_desc" : "Boneless chunks of chicken lathered with a rich, buttery gravy of cream, tomatoes and spices.",
      "customer_review":" This cuisine is definitely worth trying, especially during festive season. So, impressed by the taste, nothing but the best. ",
      "image":"chicken-curry.jpg",
    },
    {
      "category_name" : "Chicken",
      "dish_name" : "KFC chicken",
      "amount" : 200,
      "star" : 4,
      "dish_desc" : "Pressure fried chicken pieces, seasoned with Sanders' recipe of 11 herbs and spices.",
      "customer_review":"Went with my family and would definitely recommend it to other families as well",
      "image":"kfc-chicken.jpg",
    },
    {
      "category_name" : "Chicken",
      "dish_name" : "Butter chicken",
      "amount" : 120,
      "star" : 4,
      "dish_desc" : "Aromatic golden chicken pieces in an incredible creamy curry sauce.",
      "customer_review":"The butter chicken is amazing at this place. If you are a Butter chicken lover, you must try here! Ambience is also good.",
      "image":"chicken-curry.jpg",
    },
    {
      "category_name" : "Chicken",
      "dish_name" : "Chicken salad",
      "amount" : 160,
      "star" : 3,
      "dish_desc" : "An properly cooked combination of both veggies and finely chopped chicken pieces for diet lovers.",
      "customer_review":"Was Fresh as mother's love",
      "image":"chicken-salad.jpg",
    },
    {
      "category_name" : "Chicken",
      "dish_name" : "Chicken shawarma",
      "amount" : 90,
      "star" : 3.5,
      "dish_desc" : "Thinly sliced cut of meat inside pita.",
      "customer_review":"Recently had an normal shawarma here and it was descent they must add some more spice to their shawarma.",
      "image":"chicken-shewarma.jpg",
    },
    {
      "category_name" : "Chicken",
      "dish_name" : "Chicken wings",
      "amount" : 150,
      "star" : 4.5,
      "dish_desc" : "Fried chicken wings with chipotle mayo.",
      "customer_review":"One of the best wings that I ever had in my life! simply delicious.",
      "image":"chicken-wings.jpg",
    },
    {
      "category_name" : "Chicken",
      "dish_name" : "Mexican chicken",
      "amount" : 200,
      "star" : 4,
      "dish_desc" : "An deliteful chicken breath with chillie flakes for spicy lovers.",
      "customer_review":"An must try dish the way the meat cooked and the spice added to it is simply awesome.Worth for the money",
      "image":"mexican-chicken.jpg",
    },
    //  briyani
    {
        "category_name" : "Briyani",
        "dish_name" : "Chicken Briyani",
        "amount" : 180,
        "star" : 4,
        "dish_desc" : "Finely chopped and finely cooked pieces of chicken inside with the added special flaovour outside.",
        "customer_review":"No reviews yet",
        "image":"briyani-chicken.jpg",
      },
    {
        "category_name" : "Briyani",
        "dish_name" : "Veg Briyani",
        "amount" : 100,
        "star" : 3.5,
        "dish_desc" : "Made with pure and fresh incredients to make justification to veg lovers.",
        "customer_review":"Was expecting to taste like an veg briyani but tasted like an tomato rice.",
        "image":"briyani-veg.jpg",
      },
    {
        "category_name" : "Briyani",
        "dish_name" : "Mutton Briyani",
        "amount" : 180,
        "star" : 4,
        "dish_desc" : "Finely chopped and cooked mutton pieces inside with added special flavour outside.",
        "customer_review":"Most underrated dish.Its taste awesome and the price equals to chicken briyani can't understand why people prefer chicken briyani over mutton here.",
        "image":"briyani-mutton.jpg",
      },
    {
        "category_name" : "Briyani",
        "dish_name" : "Special Briyani",
        "amount" : 270,
        "star" : 4.5,
        "dish_desc" : "An hyderabadi style briyani with tender chicken inside.",
        "customer_review":"Tried it recently and it's an new experience.",
        "image":"briyani-combo.jpg",
      },
      
      //   pizza
      {
          "category_name" : "Pizza",
          "dish_name" : "veg pizza",
          "amount" : 100,
          "star" : 4,
          "dish_desc" : "Baked with several veggies and cheese.",
          "customer_review":"Perfect dish for veg lovers.",
          "image":"pizza-veg.jpg",
        },
      {
          "category_name" : "Pizza",
          "dish_name" : "Pepperoni pizza",
          "amount" : 110,
          "star" : 4,
          "dish_desc" : "Baked with the combination of several veggies and Pepperoni with cheese for stunning flavour.",
          "customer_review":"No reviews yet.",
          "image":"pizza-pepporoni.jpg",
        },
       {
          "category_name" : "Pizza",
          "dish_name" : "Cheese pizza",
          "amount" : 115,
          "star" : 4,
          "dish_desc" : "Baked with enormous amount of love and cheese.",
          "customer_review":"Cheesy as the name indigates, recommented for an one time try .",
          "image":"pizza-cheese.jpg",
        },
        {
            "category_name" : "Chicken",
            "dish_name" : "Chicken burger",
            "amount" : 180,
            "star" : 4,
            "dish_desc" : "Served with perfectly cooked chicken ham for the taste and fine veggies for health.",
            "customer_review":" Recently i visited this place with my friend. They had 2 burgers for 280rs offer. I bought a parcel of two chicken burgers. Chicken was properly cooked and burger tastes nice.",
            "image":"chicken-burger.jpg",
          },
      {
          "category_name" : "Pizza",
          "dish_name" : "Margherita pizza",
          "amount" : 130,
          "star" : 4.5,
          "dish_desc" : "Baked with cheese and Margherita to ensure delite till the last piece.",
          "customer_review":"Only place where you can have the best Margherita pizza in this whole town, don't forget to have your seasoning.",
          "image":"pizza-cheese.jpg",
        },
      {
          "category_name" : "Pizza",
          "dish_name" : "Assorted pizza",
          "amount" : 100,
          "star" : 4.5,
          "dish_desc" : "An mixture of all the varieties of pizzas for an person with different tastes.",
          "customer_review":"If you are an kind of person who likes all varietes of pizzas and to taste them all at-once then, Here is your solution.",
          "image":"pizza-assorted.jpg",
        },
      {
          "category_name" : "Pizza",
          "dish_name" : "Egg pizza",
          "amount" : 120,
          "star" : 4.5,
          "dish_desc" : "Baked with cheese and served with boiled egg.",
          "customer_review":"Nice dish to have.",
          "image":"pizza-egg.jpg",
        },
      {
          "category_name" : "Pizza",
          "dish_name" : "Scrambled egg pizza",
          "amount" : 120,
          "star" : 4.5,
          "dish_desc" : "Baked with cheese and scrambled egg to ensure the mouth watering appetite.",
          "customer_review":"No reviews yet.",
          "image":"pizza-scrabled_Edd.jpg",
        },
        // sea food
 
        {
            "category_name" : "Sea Food",
            "dish_name" : "Prawn",
            "amount" : 200,
            "star" : 4,
            "dish_desc" : "Fresh prawns marinated with special ingredients for several hours to provide deliteful taste.",
            "customer_review":"An must try dish for prawn lovers.",
            "image":"prawn-fry.jpg",
          },
        {
            "category_name" : "Sea Food",
            "dish_name" : "Shrimp sauce",
            "amount" : 210,
            "star" : 4,
            "dish_desc" : "Properly cooked shrimp in the combination of several spices and some special ingredients.",
            "customer_review":"An perfect combo for rice and nan.",
            "image":"shrimp-sauce.jpg",
          },
        {
            "category_name" : "Sea Food",
            "dish_name" : "Fish BBQ",
            "amount" : 230,
            "star" : 4,
            "dish_desc" : "Slowly cooked fine fish in an charcoal.",
            "customer_review":"Nice one.",
            "image":"fish-bbq.jpg",
          },
        {
            "category_name" : "Sea Food",
            "dish_name" : "Fish Sandwich",
            "amount" : 210,
            "star" : 4,
            "dish_desc" : "Fine fresh fish in an kfc styled burger.",
            "customer_review":"Different experience.",
            "image":"fish-sandwich.jpg",
          },
        //   grill
        {
            "category_name" : "Tuscan Grilled",
            "dish_name" : "Grilled Beef",
            "amount" : 340,
            "star" : 3.5,
            "dish_desc" : "Fresh beef marinated in special ingredients and grilled for beef lovers.",
            "customer_review":"Tendery but is hard to eat.",
            "image":"grilled-beef.jpg",
          },
        {
            "category_name" : "Tuscan Grilled",
            "dish_name" : "Grilled Chicken",
            "amount" : 250,
            "star" : 4,
            "dish_desc" : "Fresh chicken marinated in special ingredients and grilled for chicken lovers.",
            "customer_review":"Good dish and good place to hangout with friends.",
            "image":"grilled-chicken.jpg",
          },
        {
            "category_name" : "Tuscan Grilled",
            "dish_name" : "Chicken Kebab",
            "amount" : 120,
            "star" : 4.5,
            "dish_desc" : "Fresh pieces of chicken marinated in special ingredients and grilled in an authentic kebab style  for kebab lovers",
            "customer_review":"One of the best kebabs I ever had in my life.",
            "image":"grilled-chicken-kebab.jpg",
          },
        {
            "category_name" : "Tuscan Grilled",
            "dish_name" : "Grilled fish",
            "amount" : 140,
            "star" : 4,
            "dish_desc" : "Fresh fish marinated in special ingredients and grilled for fish lovers.",
            "customer_review":"No reviews yet",
            "image":"grilled-fish.jpg",
          },
        {
            "category_name" : "Tuscan Grilled",
            "dish_name" : "Grilled meat",
            "amount" : 160,
            "star" : 4.5,
            "dish_desc" : "Fresh meat marinated in special ingredients and grilled for meat lovers.",
            "customer_review":"An excellent meat",
            "image":"grilled-meat.jpg",
          },
          //ice cream
          {
            "category_name" : "Icecream",
            "dish_name" : "Oreo Icecream",
            "amount" : 110,
            "star" : 4,
            "dish_desc" : "Freshly prepared icecream  with highly rich milk content infused with everyone's favourite Oreo",
            "customer_review":"Fantabulous one.",
            "image":"icecream-oreo.jpg",
          },
          {
            "category_name" : "Icecream",
            "dish_name" : "Pistacho Icecream",
            "amount" : 140,
            "star" : 4.5,
            "dish_desc" : "Freshly prepared icecream  with highly rich milk content and highly nutricious pistacho",
            "customer_review":"An perfect way to end the meal.",
            "image":"icecream-pistacho.jpg",
          },
          {
            "category_name" : "Icecream",
            "dish_name" : "Fried Icecream",
            "amount" : 110,
            "star" : 4,
            "dish_desc" : "Freshly prepared icecream with highly rich milk content infused with crispy shell outside",
            "customer_review":"I have tried it for the first and it became my favourite.",
            "image":"icecream-fried.jpg",
          },
          {
            "category_name" : "Icecream",
            "dish_name" : "Organic Icecream",
            "amount" : 170,
            "star" : 4.5,
            "dish_desc" : "Freshly prepared icecream with highly rich milk content infused with real fruits to bring its taste without any artificial flavours.",
            "customer_review":"Tastes an bit different when comparing with normal other ice creams.",
            "image":"icecream-topping.jpg",
          },
          {
            "category_name" : "Icecream",
            "dish_name" : "Icecream dinner",
            "amount" : 180,
            "star" : 4,
            "dish_desc" : "Freshly prepared icecream with an waffle in it to bring an end to kid's hunger.",
            "customer_review":"Tastes good but the waffle's crisp is missing .",
            "image":"icecream-waffle.jpg",
          },

          //pastry
          {
            "category_name" : "Pastry",
            "dish_name" : "Eyesight pastry",
            "amount" : 80,
            "star" : 4,
            "dish_desc" : "Pastry with original carrot's nutrition as it aint got any artificial flavours or essence in it.",
            "customer_review":"Average in taste.",
            "image":"pastry-carrot.jpg",
          },
          {
            "category_name" : "Pastry",
            "dish_name" : "Chocolate pastry",
            "amount" : 90,
            "star" : 4,
            "dish_desc" : "Pastry with original coco's flavor in it as aint got any artificial flavours or essence in it.",
            "customer_review":"Perfect for chocolate lovers.",
            "image":"pastry-chocolate.jpg",
          },
          {
            "category_name" : "Pastry",
            "dish_name" : "Raspberri pastry",
            "amount" : 70,
            "star" : 3,
            "dish_desc" : "Pastry made out of original raspberri.",
            "customer_review":"Literally tasted like Red-velvet cake, good in taste.Hope they soon will get into ice-cream cakes and will do orders in it.",
            "image":"pastry-raspberries.jpg",
          },
          {
            "category_name" : "Pastry",
            "dish_name" : "Walnut pastry",
            "amount" : 60,
            "star" : 3.5,
            "dish_desc" : "Pastry made out of walnuts.",
            "customer_review":"Had it as an welcome complement, Good in taste.",
            "image":"pastry-walnut.jpg",
          },

          //soup
          {
            "category_name" : "Soups",
            "dish_name" : "Wedding soup",
            "amount" : 110,
            "star" : 4,
            "dish_desc" : "Made with real veggies and the falvour will make one remember their own wedding dish.",
            "customer_review":"Was an bit salty.",
            "image":"soup-wedding.jpg",
          },
          {
            "category_name" : "Soups",
            "dish_name" : "Chicken noodle soup",
            "amount" : 140,
            "star" : 4.5,
            "dish_desc" : "Tendery pieces of chicken chosen for soup and infused with noodles.",
            "customer_review":"No reviews yet.",
            "image":"soup-chicken-noodle.jpg",
          },
          {
            "category_name" : "Soups",
            "dish_name" : "Chicken soup",
            "amount" : 100,
            "star" : 4,
            "dish_desc" : "Finely chopped and fresh chicken is used.",
            "customer_review":"Had it for my cold, and the level of spice it had and at the temperature of the soup when it was served was amazing.",
            "image":"soup-chicken.jpg",
          },
          {
            "category_name" : "Soups",
            "dish_name" : "Mushroom soup",
            "amount" : 70,
            "star" : 1,
            "dish_desc" : "Made with real mushrooms .",
            "customer_review":"Not worth it.",
            "image":"soup-mushroom.jpg",
          },
          {
            "category_name" : "Soups",
            "dish_name" : "Rawmen soup",
            "amount" : 130,
            "star" : 2.5,
            "dish_desc" : "Made with real vegetables without any artificial flavours in it for anime lovers.",
            "customer_review":"Fantabulous.",
            "image":"soup-rawmen.jpg",
          },
          {
            "category_name" : "Soups",
            "dish_name" : "Prawn soup",
            "amount" : 110,
            "star" : 3.5,
            "dish_desc" : "Made by extracting the starch content and the falvour of prawns.",
            "customer_review":"I am Sure it's an Experimental dish one for the chef,I wish they remove this dish from their menu as soon as possible.",
            "image":"soup-prawn.jpg",
          },
  ];

  test: any;

  details: any;
  dishes: any;

  constructor(private _elementRef: ElementRef,private router: Router,public src : ServiceService) { 

 }

  ngOnInit(): void {

    this.details = this.src.getItem();

    if(this.details=="undefined" || this.details == undefined || this.details == null || this.details =="null")
    {
      this.router.navigateByUrl("menu");
    }
    else
    {
      const ageAndGender = (d: { category_name: any; }) => d.category_name === this.details.dish_name ;
         
      this.dishes = this.dishes_details.filter(ageAndGender);

    }
    

  }


  counter(i: number) {
    return new Array(i+1);
}

openNav()
{

    const inputTag = document.getElementById('mySidenav') as HTMLInputElement;
    inputTag.style.width="250px";

    inputTag.style.border="1px solid black";

    const inputTag1 = document.getElementById('home') as HTMLInputElement;
    const value1 = inputTag1.style.marginLeft="250px";

    const inputTag2 = document.getElementById('footer') as HTMLInputElement;
    const valu2 = inputTag2.style.marginLeft="250px";

  
}

closeNav() {
  const inputTag = document.getElementById('mySidenav') as HTMLInputElement;
  const value = inputTag.style.width="0px";
  inputTag.style.border="0px";

  const inputTag1 = document.getElementById('home') as HTMLInputElement;
  const value1 = inputTag1.style.marginLeft="0px";

  const inputTag2 = document.getElementById('footer') as HTMLInputElement;
  const value2 = inputTag2.style.marginLeft="0px";


}

  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : another page navigation operation use
  
  // ###################################################################

order(group:any)
{

  this.src.setorder(group);
  this.router.navigateByUrl("order");
}


  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : Filter and condition check operation use
  
  // ###################################################################

check(test: any)
{

     const ageAndGender = (d: { category_name: any; }) => d.category_name === this.details.dish_name ;
         
     this.dishes = this.dishes_details.filter(ageAndGender);

      if(test==0)
      {

        const ageAndGender = (d: { amount: any; }) => d.amount <= 150 ;
         
        this.dishes = this.dishes.filter(ageAndGender);
  

      }
      else if(test==1)
      {
         const ageAndGender = (d: { amount: any; }) => d.amount <= 300 ;
         
         this.dishes = this.dishes.filter(ageAndGender);
      }
      else if(test==2)
      {
        const ageAndGender = (d: { amount: any; }) => d.amount >= 300 ;
         
        this.dishes = this.dishes.filter(ageAndGender);
      }
}



  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : Filter operation will be use
  
  // ###################################################################

check1(test:any)
{

  const ageAndGender = (d: { category_name: any; }) => d.category_name === this.details.dish_name ;
         
  this.dishes = this.dishes_details.filter(ageAndGender);

  const ageAndGender1 = (d: { star: any; }) => d.star <= test  ;
         
  this.dishes = this.dishes.filter(ageAndGender1);
  
}


  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : Refersh operation will be use this operation
  
  // ###################################################################

Refresh()
{
  const ageAndGender = (d: { category_name: any; }) => d.category_name === this.details.dish_name ;
         
  this.dishes = this.dishes_details.filter(ageAndGender);
}

}
