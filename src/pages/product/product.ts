import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProductProvider } from "../../providers/product/product";
import { pageAnimation } from "../../shared/core/public-data";
import { HomePage } from "../home/home";
import { ProductDetailPage } from "../product-detail/product-detail";

@Component({
  selector: "page-product",
  templateUrl: "product.html",
  animations: [pageAnimation]
})
export class ProductPage implements OnInit {
  public products = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private services: ProductProvider
  ) {
    this.services.getProducts().subscribe(product => {
      this.products = product;
    });
  }
  goToHome() {
    this.navCtrl.setRoot(HomePage);
  }
  ngOnInit() {}
  goToProductDetail(product) {
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }
}
