import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/common/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {

  form!: FormGroup
  submited: boolean = false

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      type: new FormControl(null),
      title: new FormControl(null),
      image: new FormControl(null),
      description: new FormControl(null),
      price: new FormControl(null),
     })
  }

  submit() { 
    if ( this.form.invalid) {
      return;
    }
    
    this.submited = true

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      image: this.form.value.image,
      description: this.form.value.description,
      price: this.form.value.price,
      date: new Date()
    }

    
    this.productService.create(product).subscribe(res => {
      this.form.reset()
      this.submited = false
      this.router.navigate(['admin/dashboard/'])
    })

   

    
  }


}
