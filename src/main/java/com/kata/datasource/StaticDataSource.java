package com.kata.datasource;

import java.util.ArrayList;
import java.util.List;

import com.kata.domain.Product;

public class StaticDataSource {

	public static List<Product> products = new ArrayList<Product>(){{
	    add(new Product(1l, "Tv", 356., "http://images.samsung.com/is/image/samsung/my-full-hd-k6300-ua49k6300akxxm-001-front-black?$PD_GALLERY_L_JPG$"));
	    add(new Product(2l, "refrigerateur", 204., "https://www.electrodepot.fr/media/catalog/product/cache/image/800x/beff4985b56e3afdbeabfc89641a4582/P946058.jpg"));
	    add(new Product(3l, "radio", 58., "https://www.bhphotovideo.com/images/images500x500/sony_icf506_portable_am_fm_radio_1319434.jpg"));
	    add(new Product(4l, "telephone portable", 72., "https://i2.cdscdn.com/pdt2/s/8/n/1/700x700/samsunggalaxys8n/rw/samsung-galaxy-s8-noir-carbone.jpg"));
	    add(new Product(5l, "pc portable", 400., "https://image.darty.com/informatique/ordinateur_portable-portable/portable/hp_14-bp007nf_o1708184340272A_133023430.jpg"));
	    add(new Product(6l, "voiture", 784.2, "https://cdn.static01.nicematin.com/media/npo/mobile_1440w/2017/08/bugatti-chiron-afp.jpg"));
	}};;
}
