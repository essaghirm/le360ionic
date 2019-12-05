import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the NodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-node',
  templateUrl: 'node.html',
})
export class NodePage {

  node: any
  full_node: any
  pays: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public store: StoreProvider) {
    this.node = this.navParams.get('node')
    this.getNode(this.node.nid)
    console.log(this.node)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NodePage');
  }

  getNode(nid) {
    this.http.get(`${this.store.api_url}/node/${nid}.json`).subscribe(data => {
      // this.nodes = Object.keys(data).map(i => data[i])
      console.log(data)
      this.node.body = data['body']['und'][0].safe_value
      this.node.comment_count = data['comment_count']
      console.log(this.node)

      // get taxonomies (name & id)
      this.getTaxonomies(nid)
    });
  }

  getTaxonomies(nid){

  }

}
