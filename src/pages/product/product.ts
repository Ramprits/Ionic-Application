import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProductProvider } from "../../providers/product/product";
import { TrackerError } from "../../shared/tracker.error";
import { pageAnimation } from "../../shared/core/public-data";

@Component({
  selector: "page-product",
  templateUrl: "product.html",
  animations: [pageAnimation]
})
export class ProductPage implements OnInit {
  products: any[] | TrackerError;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private services: ProductProvider
  ) {
    this.services.getProducts().subscribe(product => {
      this.products = product;
    });
  }

  ngOnInit() {}
}
