import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProductProvider } from "../../providers/product/product";
import { HomePage } from "../home/home";
import { pageAnimation } from "../../shared/core/public-data";

@Component({
  selector: "page-best-seller",
  templateUrl: "best-seller.html",
  animations: [pageAnimation]
})
export class BestSellerPage {
  public bestSeller = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private productService: ProductProvider
  ) { }

  ionViewDidLoad() {
    this.productService.getProducts().subscribe(allProducts => {
      this.bestSeller = allProducts.filter(
        products => products.bestSeller == true
      );
    });
  }

  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
}
