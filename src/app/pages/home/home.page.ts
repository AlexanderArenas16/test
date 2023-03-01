import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  names = [{ name: 'name1'}, { name: 'name2'}, { name: 'name3'}, { name: 'name4'}]

  constructor() { }

  ngOnInit() {
  }

}
