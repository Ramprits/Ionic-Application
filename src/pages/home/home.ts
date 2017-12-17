import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Title } from "@angular/platform-browser";
import { PostPage } from "../post/post";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, private title: Title) {
    this.title.setTitle("Home page");
  }
  showAlert() {
    alert("Welcome to the Ionic");
  }
  GoToPostPage() {
    this.navCtrl.push(PostPage);
  }
}
