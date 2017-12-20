import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { PostProvider } from "../providers/post/post";
import { PostPage } from "../pages/post/post";
import { TodoService } from "../providers/todos/todo-service";
import { ProductProvider } from "../providers/product/product";
import { ProductPage } from "../pages/product/product";
import { HomeProvider } from "../providers/home/home";
import { TrainingProvider } from "../providers/training/training";
import { TrainingPage } from "../pages/training/training";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { BestSellerPage } from "../pages/best-seller/best-seller";
import { TrainingDetailPage } from "../pages/training-detail/training-detail";
import { HomeDetailPage } from "../pages/home-detail/home-detail";
import { FilterModelPage } from "../pages/filter-model/filter-model";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CampaignProvider } from '../providers/campaign/campaign';
import { CampaignPage } from '../pages/campaign/campaign';
import { AddCampaignPage } from '../pages/add-campaign/add-campaign';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PostPage,
    ProductPage,
    TrainingPage,
    ProductDetailPage,
    BestSellerPage,
    TrainingDetailPage,
    HomeDetailPage,
    FilterModelPage,
    LoginPage,
    SignupPage,
    CampaignPage,
    AddCampaignPage
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PostPage,
    ProductPage,
    TrainingPage,
    ProductDetailPage,
    BestSellerPage,
    TrainingDetailPage,
    HomeDetailPage,
    FilterModelPage,
    LoginPage,
    SignupPage,
    CampaignPage,
    AddCampaignPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PostProvider,
    TodoService,
    ProductProvider,
    HomeProvider,
    TrainingProvider,
    AuthProvider,
    CampaignProvider
  ]
})
export class AppModule { }
