import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule, routedComponents } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

import { CustomizationComponent } from './customization/customization.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReviewComponent } from './review/review.component';
import { SubmitComponent } from './submit/submit.component';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { NavigatorService } from 'app/shopping-cart/shopping-cart-navigator-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './delivery/address/address.component';

@NgModule({
  imports: [SharedModule, ShoppingCartRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [ShoppingCartComponent, routedComponents, CustomizationComponent, DeliveryComponent, ReviewComponent, SubmitComponent, HeaderComponent, AddressComponent],
  providers: [NavigatorService]
})
export class ShoppingCartModule { }
