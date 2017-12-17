import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Title } from "@angular/platform-browser";
import { PostPage } from "../post/post";
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  products: any[];
  constructor(
    public navCtrl: NavController,
    private title: Title,
    private services: ProductProvider
  ) {
    this.title.setTitle("Home page");
  }
  showAlert() {
    alert("Welcome to the Ionic");
  }

  ionViewDidLoad() {
    this.services.getProducts().subscribe(response => console.log(response));
  }

  GoToPostPage() {
    this.navCtrl.push(PostPage);
  }
}
