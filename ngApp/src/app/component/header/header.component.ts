import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../service/client.service';
import { Client } from '../../entity/client';
import { BasketService } from '../../service/basket.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  client: Client = new Client();
  buttonName: String = "check basket";
  targetLocation: String ="/basket";

  constructor(private clientService: ClientService, private basketService: BasketService, private router: Router, location: Location) {
    router.events.subscribe((val) => {
      if(location.path() === "/basket"){
        this.buttonName = "check products";
        this.targetLocation = "/";
      } else {
        this.buttonName = "check basket";
        this.targetLocation ="/basket";
      }
    });
   }

  ngOnInit() {
    this.getCurrentClient();
    
    
  }

  getCurrentClient(){
    this.clientService.getCurrentClient().subscribe(
      res => this.client = res,
      err => console.log(err)
    )
  }


  deleteBasket(){
    this.basketService.deleteBasket().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
