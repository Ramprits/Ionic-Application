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
import { Network } from '@ionic-native/network';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any }>;

  constructor(
    private network: Network,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
    });
    disconnectSubscription.unsubscribe();
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
      connectSubscription.unsubscribe();
    });
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
    this.nav.push(page.component);
  }
}
