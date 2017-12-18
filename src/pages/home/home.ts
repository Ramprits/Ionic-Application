import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { Title } from "@angular/platform-browser";
import { PostPage } from "../post/post";
import { HomeProvider } from "../../providers/home/home";
import { TrackerError } from "../../shared/tracker.error";
import { pageAnimation } from "../../shared/core/public-data";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [pageAnimation]
})
export class HomePage implements OnInit {
  categories: any[] | TrackerError;
  products: any[];
  constructor(
    public navCtrl: NavController,
    private title: Title,
    private homeService: HomeProvider
  ) {
    this.title.setTitle("Home page");
  }
  ngOnInit() {
    this.homeService.getCategories().subscribe(category => {
      this.categories = category;
    });
  }
  ionViewDidLoad() {}
  GoToPostPage() {
    this.navCtrl.push(PostPage);
  }

  doRefresh(refresher) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      console.log("Async operation has ended");
      refresher.complete();
    }, 2000);
  }
}
