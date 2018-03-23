package com.kata.model;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;

import com.kata.domain.Basket;
import com.kata.domain.Client;

@Component
@Scope(value = "session", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ClientModel {

	private Client currentClient;
	private Basket clientBasket;
	
	public ClientModel() {}
	
	@PostConstruct
	public void intialise() {
		clientBasket = new Basket();
		currentClient = new Client();
		currentClient.setId(1l);
		currentClient.setFirstName("John");	
		currentClient.setLastName("Doe");
	}
	
	public Client getCurrentClient() {
		return currentClient;
	}

	public void setCurrentClient(Client currentClient) {
		this.currentClient = currentClient;
	}

	public Basket getClientBasket() {
		return clientBasket;
	}

	public void setClientBasket(Basket clientBasket) {
		this.clientBasket = clientBasket;
	}
}
