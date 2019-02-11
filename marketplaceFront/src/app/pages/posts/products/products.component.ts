import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [{name : 'name'}];
  selectedproduct;;
  constructor(private api:ApiService) { 
    this.getProducts();
  }
  
  ngOnInit() {
  
  }

  getProducts = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
      }, 
      error => {
        console.log(error);
      }
    )
  }
}
