import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public aboutPage=AboutPage;
  constructor(public nav:NavController) {
  }

  public pushAboutPage(){
    this.nav.navigateForward('/about');

  }

}
