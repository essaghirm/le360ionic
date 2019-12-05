import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
Generated class for the StoreProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class StoreProvider {
  site_url: string = "http://localhost/drupal";
  api_url: string = "http://localhost/drupal/api";
  menu_url = "http://localhost/drupal/contentasjson/menu/main-menu";
  public menu: any[];
  nodes: Observable<any>;

  constructor(public http: Http) {
    console.log("Hello StoreProvider Provider");
  }

  getMenuItems() {
    // console.log(`${this.api_url}/contentasjson/menu/main-menu`)
    this.http.get(this.menu_url).map(res => res.json()).subscribe(data => {
		this.menu = Object.keys(data).map(i => data[i])
      console.log('data', this.menu);
    });
  }

//   getNodes(){
// 	this.nodes = this.http.get(this.nodes_url);
//     this.nodes.subscribe(data => {
//       console.log(data);
//     })
//   }
}
