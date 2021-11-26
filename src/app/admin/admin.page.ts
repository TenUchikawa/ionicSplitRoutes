import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  paneEnabled = true;
  constructor(private menuController: MenuController) {}
  ionViewWillEnter() {
    this.paneEnabled = true;
    this.menuController.enable(true, 'first');
  }
  ionViewWillLeave() {
    this.paneEnabled = false;
  }
}
