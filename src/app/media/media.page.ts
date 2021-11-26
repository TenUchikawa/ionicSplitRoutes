import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage {
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
