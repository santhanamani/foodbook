import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  // <!-- 
  // ##################################################################
  // Creator name :- SANTHANAMANI S
  // CREATE DATE:-3/11/2021
  // DESCRIPTION : Data pass the ts file to html file and show to values in ui design
  
  // ###################################################################
  //  -->

 
   data =[
     {
        "ITEMNAME"   :  "DOSA",
        "TYPE"       :  "VEG",
        "CUISINCE"   :  "SOUTH INDIAN",
        "PRICE"      :  "Rs.50",
        "ORDER_DATE" :  "1-1-2021",
        "ORDER_TIME" :  "2:30PM",
     },
     {
      "ITEMNAME"   :  "CHICKEN",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "NORTH INDIAN",
      "PRICE"      :  "Rs.750",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    },
    {
      "ITEMNAME"   :  "GRILL",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "NORTH INDIAN",
      "PRICE"      :  "Rs.850",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    }, {
      "ITEMNAME"   :  "GRILL",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "SOUTH INDIAN",
      "PRICE"      :  "Rs.950",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    }, {
      "ITEMNAME"   :  "PIZZA",
      "TYPE"       :  "VEG",
      "CUISINCE"   :  "NORTH INDIAN",
      "PRICE"      :  "Rs.150",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "5:30PM",
    }, {
      "ITEMNAME"   :  "SEAFOOD",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "SOUTH INDIAN",
      "PRICE"      :  "Rs.750",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    },
    {
      "ITEMNAME"   :  "DOSA",
      "TYPE"       :  "VEG",
      "CUISINCE"   :  "SOUTH INDIAN",
      "PRICE"      :  "Rs.50",
      "ORDER_DATE" :  "1-1-2021",
      "ORDER_TIME" :  "2:30PM",
   },
   {
    "ITEMNAME"   :  "CHICKEN",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "NORTH INDIAN",
    "PRICE"      :  "Rs.750",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  },
  {
    "ITEMNAME"   :  "GRILL",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "NORTH INDIAN",
    "PRICE"      :  "Rs.850",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  }, {
    "ITEMNAME"   :  "GRILL",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "SOUTH INDIAN",
    "PRICE"      :  "Rs.950",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  }, {
    "ITEMNAME"   :  "PIZZA",
    "TYPE"       :  "VEG",
    "CUISINCE"   :  "NORTH INDIAN",
    "PRICE"      :  "Rs.150",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "5:30PM",
  }, {
    "ITEMNAME"   :  "SEAFOOD",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "SOUTH INDIAN",
    "PRICE"      :  "Rs.750",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  },
  {
    "ITEMNAME"   :  "DOSA",
    "TYPE"       :  "VEG",
    "CUISINCE"   :  "SOUTH INDIAN",
    "PRICE"      :  "Rs.50",
    "ORDER_DATE" :  "1-1-2021",
    "ORDER_TIME" :  "2:30PM",
 },
 {
  "ITEMNAME"   :  "CHICKEN",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "NORTH INDIAN",
  "PRICE"      :  "Rs.750",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
},
{
  "ITEMNAME"   :  "GRILL",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "NORTH INDIAN",
  "PRICE"      :  "Rs.850",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
}, {
  "ITEMNAME"   :  "GRILL",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "SOUTH INDIAN",
  "PRICE"      :  "Rs.950",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
}, {
  "ITEMNAME"   :  "PIZZA",
  "TYPE"       :  "VEG",
  "CUISINCE"   :  "NORTH INDIAN",
  "PRICE"      :  "Rs.150",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "5:30PM",
}, {
  "ITEMNAME"   :  "SEAFOOD",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "SOUTH INDIAN",
  "PRICE"      :  "Rs.750",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
},{
        "ITEMNAME"   :  "DOSA",
        "TYPE"       :  "VEG",
        "CUISINCE"   :  "SOUTH INDIAN",
        "PRICE"      :  "Rs.50",
        "ORDER_DATE" :  "1-1-2021",
        "ORDER_TIME" :  "2:30PM",
     },
     {
      "ITEMNAME"   :  "CHICKEN",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "NORTH INDIAN",
      "PRICE"      :  "Rs.750",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    },
    {
      "ITEMNAME"   :  "GRILL",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "NORTH INDIAN",
      "PRICE"      :  "Rs.850",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    }, {
      "ITEMNAME"   :  "GRILL",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "SOUTH INDIAN",
      "PRICE"      :  "Rs.950",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    }, {
      "ITEMNAME"   :  "PIZZA",
      "TYPE"       :  "VEG",
      "CUISINCE"   :  "NORTH INDIAN",
      "PRICE"      :  "Rs.150",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "5:30PM",
    }, {
      "ITEMNAME"   :  "SEAFOOD",
      "TYPE"       :  "NON-VEG",
      "CUISINCE"   :  "SOUTH INDIAN",
      "PRICE"      :  "Rs.750",
      "ORDER_DATE" :  "2-3-2021",
      "ORDER_TIME" :  "2:30PM",
    },
    {
      "ITEMNAME"   :  "DOSA",
      "TYPE"       :  "VEG",
      "CUISINCE"   :  "SOUTH INDIAN",
      "PRICE"      :  "Rs.50",
      "ORDER_DATE" :  "1-1-2021",
      "ORDER_TIME" :  "2:30PM",
   },
   {
    "ITEMNAME"   :  "CHICKEN",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "NORTH INDIAN",
    "PRICE"      :  "Rs.750",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  },
  {
    "ITEMNAME"   :  "GRILL",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "NORTH INDIAN",
    "PRICE"      :  "Rs.850",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  }, {
    "ITEMNAME"   :  "GRILL",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "SOUTH INDIAN",
    "PRICE"      :  "Rs.950",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  }, {
    "ITEMNAME"   :  "PIZZA",
    "TYPE"       :  "VEG",
    "CUISINCE"   :  "NORTH INDIAN",
    "PRICE"      :  "Rs.150",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "5:30PM",
  }, {
    "ITEMNAME"   :  "SEAFOOD",
    "TYPE"       :  "NON-VEG",
    "CUISINCE"   :  "SOUTH INDIAN",
    "PRICE"      :  "Rs.750",
    "ORDER_DATE" :  "2-3-2021",
    "ORDER_TIME" :  "2:30PM",
  },
  {
    "ITEMNAME"   :  "DOSA",
    "TYPE"       :  "VEG",
    "CUISINCE"   :  "SOUTH INDIAN",
    "PRICE"      :  "Rs.50",
    "ORDER_DATE" :  "1-1-2021",
    "ORDER_TIME" :  "2:30PM",
 },
 {
  "ITEMNAME"   :  "CHICKEN",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "NORTH INDIAN",
  "PRICE"      :  "Rs.750",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
},
{
  "ITEMNAME"   :  "GRILL",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "NORTH INDIAN",
  "PRICE"      :  "Rs.850",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
}, {
  "ITEMNAME"   :  "GRILL",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "SOUTH INDIAN",
  "PRICE"      :  "Rs.950",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
}, {
  "ITEMNAME"   :  "PIZZA",
  "TYPE"       :  "VEG",
  "CUISINCE"   :  "NORTH INDIAN",
  "PRICE"      :  "Rs.150",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "5:30PM",
}, {
  "ITEMNAME"   :  "SEAFOOD",
  "TYPE"       :  "NON-VEG",
  "CUISINCE"   :  "SOUTH INDIAN",
  "PRICE"      :  "Rs.750",
  "ORDER_DATE" :  "2-3-2021",
  "ORDER_TIME" :  "2:30PM",
},
{
  "ITEMNAME"   :  "DOSA",
  "TYPE"       :  "VEG",
  "CUISINCE"   :  "SOUTH INDIAN",
  "PRICE"      :  "Rs.50",
  "ORDER_DATE" :  "1-1-2021",
  "ORDER_TIME" :  "2:30PM",
},
{
"ITEMNAME"   :  "CHICKEN",
"TYPE"       :  "NON-VEG",
"CUISINCE"   :  "NORTH INDIAN",
"PRICE"      :  "Rs.750",
"ORDER_DATE" :  "2-3-2021",
"ORDER_TIME" :  "2:30PM",
},
{
"ITEMNAME"   :  "GRILL",
"TYPE"       :  "NON-VEG",
"CUISINCE"   :  "NORTH INDIAN",
"PRICE"      :  "Rs.850",
"ORDER_DATE" :  "2-3-2021",
"ORDER_TIME" :  "2:30PM",
}, {
"ITEMNAME"   :  "GRILL",
"TYPE"       :  "NON-VEG",
"CUISINCE"   :  "SOUTH INDIAN",
"PRICE"      :  "Rs.950",
"ORDER_DATE" :  "2-3-2021",
"ORDER_TIME" :  "2:30PM",
}, {
"ITEMNAME"   :  "PIZZA",
"TYPE"       :  "VEG",
"CUISINCE"   :  "NORTH INDIAN",
"PRICE"      :  "Rs.150",
"ORDER_DATE" :  "2-3-2021",
"ORDER_TIME" :  "5:30PM",
}, {
"ITEMNAME"   :  "SEAFOOD",
"TYPE"       :  "NON-VEG",
"CUISINCE"   :  "SOUTH INDIAN",
"PRICE"      :  "Rs.750",
"ORDER_DATE" :  "2-3-2021",
"ORDER_TIME" :  "2:30PM",
},
   ];



  constructor() { }

  ngOnInit(): void {
   
    
  }

}
