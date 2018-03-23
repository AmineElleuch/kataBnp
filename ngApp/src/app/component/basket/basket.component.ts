import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../service/basket.service';
import { Basket } from '../../entity/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Basket = new Basket();
  constructor(private basketService: BasketService) { }

  ngOnInit() {
    this.getBasket();
  }

  getBasket(){
    this.basketService.getBasket().subscribe(
      res => this.basket = res,
      err => console.log(err)
    )
  }

}
