import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {

  constructor(
    private productService:ProductService,
    private router:ActivatedRoute
  ) { }

  product$

  ngOnInit(): void {
    this.productService.getById(this.router.snapshot.params['id']).subscribe(res=>this.product$=res)
  }

}
