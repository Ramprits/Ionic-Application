import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HomePage } from "../pages/home/home";
import { PostPage } from "../pages/post/post";
import { ProductPage } from "../pages/product/product";
import { TrainingPage } from "../pages/training/training";
import { BestSellerPage } from "../pages/best-seller/best-seller";
import { LoginPage } from '../pages/login/login';
import { CampaignPage } from '../pages/campaign/campaign';
import { NewTrainingPage } from '../pages/new-training/new-training';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();
    this.pages = [
      { title: "Dashboard", component: HomePage },
      { title: "Training Catalogue", component: TrainingPage },
      { title: "Post", component: PostPage },
      { title: "Product", component: ProductPage },
      { title: "Best Seller", component: BestSellerPage },
      { title: "login", component: LoginPage },
      { title: "Campaign", component: CampaignPage },
      { title: "New Training", component: NewTrainingPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
