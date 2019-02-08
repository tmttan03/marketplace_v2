import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products = [{name : 'name'}];
  products_;
  constructor(private api:ApiService) { 
    this.getProducts();
    this.products_ = { id:-1, name: '' , description: '', price:0, location:'', category:'', seller:'', created_at:'' };
  }
  
  ngOnInit() {
  
  }

  getProducts = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
        console.log(data);
      }, 
      error => {
        console.log(error);
      }
    )
  }

}
