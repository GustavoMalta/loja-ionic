import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from './../../services/produto';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers: [
    ProdutoService
  ]
})
export class DetailsPage implements OnInit{
  

  constructor(public navCtrl: NavController, public navParam: NavParams, public ps : ProdutoService) {
  }

  public produto : any = {};
  
  ngOnInit() {

    this.ps.obterProduto(this.navParam.data).subscribe(
        dados => {
        this.produto =  dados
      },
        erro => console.log(erro)
      );

  }

  goBack() {
    this.navCtrl.pop();
  }
  
}
