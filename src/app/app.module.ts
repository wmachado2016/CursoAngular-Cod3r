import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules,  } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {RestaurantsComponent} from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';

import { OrderService } from './restaurant-detail/order.services';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component'
import { SharedModule } from './shared/shared.module'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NotificationService } from './shared/messages/notification.services';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumaryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(ROUTES,{preloadingStrategy: PreloadAllModules})
  ],
  providers: [{provide:LocationStrategy, useClass: HashLocationStrategy},RestaurantsService,ShoppingCartService,OrderService,NotificationService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
