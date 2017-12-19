import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { Title } from "@angular/platform-browser";
import { PostPage } from "../post/post";
import { HomeProvider } from "../../providers/home/home";
import { TrackerError } from "../../shared/tracker.error";
import { pageAnimation } from "../../shared/core/public-data";
import { HomeDetailPage } from '../home-detail/home-detail';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [pageAnimation]
})
export class HomePage implements OnInit {
  categories: any[] | TrackerError;
  products: any[];
  loading = true;
  constructor(
    public navCtrl: NavController,
    private title: Title,
    private homeService: HomeProvider,
    public loadingCtrl: LoadingController
  ) {
    this.title.setTitle("Home page");
  }
  ngOnInit() {
    this.loading = true;
    this.homeService.getCategories().subscribe(
      category => {
        this.categories = category;
      },
      err => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    );
  }

  presentLoading() {
    this.loadingCtrl
      .create({
        content: "Please wait...",
        duration: 3000,
        dismissOnPageChange: true
      })
      .present();
  }

  ionViewDidLoad() { }
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

  itemSelected(cat) {
    this.navCtrl.push(HomeDetailPage, {
      selectedHome: cat
    })
  }
}
