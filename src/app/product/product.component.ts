import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../shared/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent implements OnInit {
  products: Array<any>;

  itemForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    qty: new FormControl('', [Validators.pattern('[0-9]*')]),
    unitPrice: new FormControl('', [Validators.pattern('[0-9]*')]),

  });

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  submitProduct() {
    alert('saving product');
    this.productService.createProduct(this.itemForm.value);
  }
}

