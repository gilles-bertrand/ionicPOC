import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myValue="helooooo";
  constructor() {}
  scan(){
    console.log('scan')
    this.myValue="scan"
  }

}
