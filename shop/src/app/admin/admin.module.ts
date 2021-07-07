import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './common/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrdersComponent } from './orders/orders.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AuthGuard } from "../common/auth.guard";
import { QuillModule } from 'ngx-quill';


@NgModule({
    imports:[
        QuillModule.forRoot(),
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild([
            {
                path:'', component: AdminLayoutComponent, children:[
                    {
                        path:'', redirectTo:'/admin/login', pathMatch:'full'
                    },
                    {
                        path:'login', component: LoginPageComponent
                    },
                    {
                        path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]
                    },
                    {
                        path:'add', component: AddProductComponent, canActivate:[AuthGuard]
                    },
                    {
                        path:'product/:id/edit', component: EditProductComponent, canActivate:[AuthGuard]
                    }

                ]
            }
        ])
    ],
    exports:[
        RouterModule
    ],
    declarations: [
      LoginPageComponent,
      AdminLayoutComponent,
      DashboardComponent,
      AddProductComponent,
      EditProductComponent
    ]
})

export class AdminModule{

}