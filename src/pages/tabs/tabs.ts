import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "HomePage";
  tab2Root = "CategoryPage";
  tab3Root = "FavoritesPage";
  tab4Root = "UserPage";

  constructor() {

  }
}
