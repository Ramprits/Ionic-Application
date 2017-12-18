import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: "page-best-seller",
  templateUrl: "best-seller.html"
})
export class BestSellerPage {
  public bestSeller = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productService: ProductProvider
  ) {}

  ionViewDidLoad() {
    this.productService.getProducts().subscribe(allProducts => {
      this.bestSeller = allProducts.filter(
        products => products.bestSeller == true
      );
    });
  }
}