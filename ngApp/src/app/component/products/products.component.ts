import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../entity/product';
import { BasketService } from '../../service/basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private basketService: BasketService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(
      res => this.products = res,
      err => console.log(err)
    )
  }


  addToBasket(product){
    this.basketService.addProduct(product).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
