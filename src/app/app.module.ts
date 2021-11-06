import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { ContactComponent } from './contact/contact.component';
import { DishComponent } from './dish/dish.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PopularDishesComponent } from './popular-dishes/popular-dishes.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './order/order.component';
import { SidnavComponent } from './sidnav/sidnav.component';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    ContactComponent,
    DishComponent,
    GalleryComponent,
    AboutComponent,
    FooterComponent,
    MenuComponent,
    PopularDishesComponent,
    SliderComponent,
    HomeComponent,
    NavbarComponent,
    OrderComponent,
    SidnavComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
