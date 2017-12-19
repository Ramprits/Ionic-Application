import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { ProductProvider } from "../../providers/product/product";
import { pageAnimation } from "../../shared/core/public-data";
import { HomePage } from "../home/home";
import { ProductDetailPage } from "../product-detail/product-detail";
import { FilterModelPage } from "../filter-model/filter-model";

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
    private services: ProductProvider,
    private fileterModel: ModalController
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
  openModel() {
    let filter = this.fileterModel.create(FilterModelPage);
    filter.present();
  }
}
