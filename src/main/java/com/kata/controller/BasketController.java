package com.kata.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kata.domain.Basket;
import com.kata.domain.Product;
import com.kata.model.ClientModel;
import com.kata.service.BasketService;

@RestController
@RequestMapping("/basket")
public class BasketController {
	
	@Autowired
	private BasketService basketService;
	@Autowired
	private ClientModel clientModel;

	@RequestMapping(value = "/addProduct", method = RequestMethod.POST)
	  public Basket addProduct(@RequestBody Product product) {
	    return basketService.addProduct(product);
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	  public void deleteBasket() {
		clientModel.setClientBasket(new Basket());
	}
	
	@RequestMapping(value = "/getBasket", method = RequestMethod.GET)
	  public Basket getBasket() {
		return clientModel.getClientBasket();
	}
}
