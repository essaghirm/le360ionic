import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { StoreProvider } from "../../providers/store/store";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  menu_url = "http://localhost/le360/contentasjson/menu/main-menu";
  nodes_url: string = "http://localhost/le360/api/v1/node.json";
  nodes: any[] = [];
  pager: any;
  page = 0

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private store: StoreProvider
  ) {
    this.getNodes(0);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
  }

  getNodes(page) {
    this.http.get(`${this.store.site_url}/json/last?page=${page}`).subscribe(data => {
      // this.nodes = Object.keys(data).map(i => data[i])
      Object.keys(data).forEach(i => {
        if (data[i].hasOwnProperty("node")) {
          this.nodes.push(data[i].node);
        }
      });
      this.pager = data["pager"];
      console.log(this.nodes, this.pager);
    });
  }

  openNode(node) {
	// console.log(node);
	this.navCtrl.push("NodePage",{
		'node': node
	})
  }

  loadData(event){
	this.getNodes(this.pager.page + 1)
  }


}
