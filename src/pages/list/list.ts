import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { StoreProvider } from "../../providers/store/store";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  nodes: any = [];
  taxonomy: any;
  page: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: StoreProvider,
    public http: HttpClient
  ) {
    this.taxonomy = this.navParams.get("taxonomy");
    this.getNodesbyCountry();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListPage");
  }

  getNodesbyCountry() {
    let taxonomy_id = this.taxonomy.link.link_path.substring(
      this.taxonomy.link.link_path.lastIndexOf("/") + 1
    );
    console.log(taxonomy_id);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    this.http
      .post(
        `${this.store.api_url}/taxonomy_term/selectNodes.json?page=${this.page}`,
        {
          tid: taxonomy_id,
          pager: 0
        },
        httpOptions
      )
      .subscribe(data => {
        Object.keys(data).forEach(i => {
          this.nodes.push({
            nid: data[i].nid,
            title: data[i].title,
            body: data[i]["body"]["und"][0].value,
            field_image: {
              src: data[i]["field_image"]["und"][0]["uri"].replace("public://",`${this.store.site_url}/sites/default/files/styles/large/public/`)}
          });
        });
        console.log(this.nodes);
      });
  }

  openNode(node) {
    this.navCtrl.push("NodePage", {
      node: node
    });
  }

  loadData(event) {
    this.page += 1;
    this.getNodesbyCountry();
  }
}
