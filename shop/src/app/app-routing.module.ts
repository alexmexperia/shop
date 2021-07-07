import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './common/main-layout/main-layout.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DeliveryPageComponent } from './delivery-page/delivery-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '', component:MainLayoutComponent, children:[
      {
        path:'', redirectTo:'/', pathMatch: 'full'
      },
      {
        path: '', component:MainPageComponent
      },
      {
        path: 'product/:id', component:ProductPageComponent 
      }
    ]
  },
  {
    path:'admin', loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
