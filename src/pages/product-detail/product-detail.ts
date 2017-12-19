import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { pageAnimation } from "../../shared/core/public-data";

@Component({
  selector: "page-product-detail",
  templateUrl: "product-detail.html",
  animations: [pageAnimation]
})
export class ProductDetailPage {
  productDetails = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productDetails = this.navParams.get("productDetails");
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductDetailPage");
  }
}
