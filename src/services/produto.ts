
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

   constructor(private http: HttpClient) {

   }

   listarProdutos() {
      return this.http.get('//batima-pc:3000/produto');
   }

   obterProduto(codigo) {
      return this.http.get('//batima-pc:3000/produto/'+codigo);
   }

}
