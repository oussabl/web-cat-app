import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../service/products.service";
import {Product} from "../../model/products.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:Product[]|null =null;
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products= data;
    })
  }
  onGetSelectedProducts() {
    this.productsService.getSelectedProducts().subscribe(data => {
      this.products= data;
    })
  }

  onGetAvailabalProducts() {
    this.productsService.getAvailableProducts().subscribe(data => {
      this.products= data;
    })
  }
}
