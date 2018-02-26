import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart.component';
import { CustomizationComponent } from 'app/shopping-cart/customization/customization.component';
import { DeliveryComponent } from 'app/shopping-cart/delivery/delivery.component';
import { ReviewComponent } from 'app/shopping-cart/review/review.component';
import { SubmitComponent } from 'app/shopping-cart/submit/submit.component';


const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
    children: [
      { path: 'customization', component: CustomizationComponent },
      { path: 'delivery', component: DeliveryComponent },
      { path: 'review', component: ReviewComponent      },
      { path: 'submit', component: SubmitComponent      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  // providers: [] // only put providers here we want that aren't provided yet
})
export class ShoppingCartRoutingModule { }

// This works too ... but let's be explicit, above
// export const SpeakersRoutingModule = RouterModule.forChild(routes);

export const routedComponents = [ShoppingCartComponent,DeliveryComponent,CustomizationComponent, ReviewComponent,SubmitComponent];
