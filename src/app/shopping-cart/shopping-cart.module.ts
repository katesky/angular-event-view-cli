import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule ,routedComponents} from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';

import { CustomizationComponent } from './customization/customization.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReviewComponent } from './review/review.component';
import { SubmitComponent } from './submit/submit.component';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  imports: [ SharedModule,    ShoppingCartRoutingModule  ],
  declarations: [ShoppingCartComponent, routedComponents, CustomizationComponent, DeliveryComponent, ReviewComponent, SubmitComponent, HeaderComponent]
})
export class ShoppingCartModule { }
