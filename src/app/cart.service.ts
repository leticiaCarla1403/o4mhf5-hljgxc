import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  /*propriedade para armazenar a matriz dos produtos atuais no carrinho.*/
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  /* método anexa um produto a uma matriz deitems */
  addToCart(product: Product) {
    this.items.push(product);
  }
  /* método coleta os itens que os usuários adicionam ao carrinho e retorna cada item com sua quantidade associada */
  getItems() {
    return this.items;
  }
   /*método retorna um array vazio de itens, que esvazia o carrinho */
  clearCart() {
    this.items = [];
    return this.items;
  }

}
