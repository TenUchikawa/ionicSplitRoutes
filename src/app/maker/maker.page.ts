import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.page.html',
  styleUrls: ['./maker.page.scss'],
})
export class MakerPage {
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
