import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../common/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  products$ 

  
  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(res=>this.products$=res)
  }

  


}
