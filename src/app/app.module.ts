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

@NgModule({
  declarations: [MyApp, HomePage, ListPage, PostPage, ProductPage],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, PostPage, ProductPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PostProvider,
    TodoService,
    ProductProvider,
    HomeProvider
  ]
})
export class AppModule {}
