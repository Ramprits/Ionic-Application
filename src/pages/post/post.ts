import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { PostProvider } from "../../providers/post/post";
import { TrackerError } from "../../shared/tracker.error";
import { HomePage } from "../home/home";

@Component({
  selector: "page-post",
  templateUrl: "post.html"
})
export class PostPage implements OnInit {
  posts: any[] | TrackerError;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private postServices: PostProvider
  ) {}
  ngOnInit() {
    this.postServices.getPosts().subscribe(
      post => {
        this.posts = post;
      },
      error => {
        console.log("Server problem");
      }
    );
  }
  goToHome() {
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad PostPage");
  }
}
