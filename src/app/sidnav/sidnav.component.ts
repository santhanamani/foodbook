import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidnav',
  templateUrl: './sidnav.component.html',
  styleUrls: ['./sidnav.component.scss']
})
export class SidnavComponent implements OnInit {
 

  price = [
    {
      "price_name" : " Up to ₹150",
    },
    {
      "price_name" : "₹150 – ₹500",
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

  constructor() { }

  ngOnInit(): void {
    
  }

  counter(i: number) {
    return new Array(i+1);
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

}
