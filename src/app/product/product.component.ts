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

    this.allProducts();
  }

  resetForm() {
    this.itemForm.reset();
  }

  allProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  submitProduct() {
    this.productService.createProduct(this.itemForm.value).subscribe(data => {
      if (data) {
        alert('Item has been saved.');
        this.allProducts();
        this.resetForm();
      } else {
        alert('Failed to save item.');
      }
    });
  }

  updateProduct(product: any) {
    this.itemForm.setValue({
      id: product.id,
      name: product.name,
      qty: product.qty,
      unitPrice: product.unitPrice
    });
  }

  deleteProduct(product: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.productService.deleteProduct(product.id).subscribe(
        (result) => {
          if (result) {
            alert('Item has been deleted successfully');
          } else {
            alert('Failed to delete the item');
          }
          this.allProducts();
        }
      );
    }
  }
}

