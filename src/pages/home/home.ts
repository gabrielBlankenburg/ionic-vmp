import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ss } from '../../services/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	topText = '';
	middleText = '';
	bottomText = '';

	constructor(public navCtrl: NavController) {
	}

	sendText() {
		ss.send(this.topText, this.middleText, this.bottomText);
	}

}
