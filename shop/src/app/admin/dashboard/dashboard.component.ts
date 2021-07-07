import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/common/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  products
  pSub!: Subscription
  rSub!: Subscription


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.pSub = this.productService.getAll().subscribe( products => {
      console.log(products)
      this.products = products
    })
  }

  ngOnDestroy(){
    if (this.pSub){
      this.pSub.unsubscribe()
    }

  }

  remove (id) {
    this.rSub = this.productService.remove(id).subscribe( () => {
      this.products = this.products.filter( product => product.id !== id)
    })
  }
}
