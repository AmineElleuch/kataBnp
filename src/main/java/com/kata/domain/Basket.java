package com.kata.domain;

import java.util.ArrayList;
import java.util.List;

public class Basket {

	private Long id;
	private List<Product> products = new ArrayList<Product>();
	private Double price = 0.;

	public Basket() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}
}
