import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/common/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {

  product
  form!: FormGroup
  submited = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    this.productService.getById(this.route.snapshot.params['id']).subscribe(res=>{
      this.product=res
      this.form = new FormGroup({
        type: new FormControl(this.product.type),
        title: new FormControl(this.product.title),
        image: new FormControl(this.product.image),
        description: new FormControl(this.product.description),
        price: new FormControl(this.product.price),
       })
    })
  }

  submit() { 
    if ( this.form.invalid) {
      return;
    }
    
    this.submited = true

    
    this.productService.update(
      {...this.product,
        type: this.form.value.type,
        title: this.form.value.title,
        image: this.form.value.image,
        description: this.form.value.description,
        price: this.form.value.price,
        date: new Date()}).subscribe(res => {

      this.submited = false
      this.router.navigate(['/admin','dashboard'])
    }
      )
  }

  
}
