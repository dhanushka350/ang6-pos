import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../shared/customer.service';
import {ProductService} from '../shared/product.service';
import {Product} from '../app.module';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products: Array<Product> = [];
  subs: Array<any> = [];
  selectedProduct: Product;

  customerCode = '';
  customerName = '';

  itemCode = '';
  itemName = '';
  itemPrice = '';
  itemQty = '';
  item = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    qty: new FormControl('', [Validators.pattern('[0-9]*')]),
    unitPrice: new FormControl('', [Validators.pattern('[0-9]*')]),

  });
  customerForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private customerService: CustomerService, private productService: ProductService) {
  }

  ngOnInit() {
  }

  getCustomerByCode() {
    this.customerService.getCustomerByCoded(this.customerCode).subscribe(data => {
      this.customerName = data.name;
    });
  }

  getItem() {
    this.productService.getItemByCoded(this.itemCode).subscribe(data => {
      this.itemName = data.name;
      this.itemPrice = data.unitPrice;
      this.itemQty = data.qty;
    });
  }

  addToList() {
    this.subs.push((parseFloat(this.itemPrice) * parseInt(this.itemQty, 10)));
    this.selectedProduct = new Product();
    this.selectedProduct.id = parseInt(this.itemCode, 10);
    this.selectedProduct.name = this.itemName;
    this.selectedProduct.qty = parseInt(this.itemQty, 10);
    this.selectedProduct.unitPrice = parseFloat(this.itemPrice);
    this.products.push(this.selectedProduct);
  }
}
