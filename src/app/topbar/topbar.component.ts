import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  title = 'Point Of Sale - Akvasoft';
  constructor() {
  }

  ngOnInit() {
  }

}
