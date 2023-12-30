import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {

  nameLower = 'lenar toledo';
  nameUpper = 'LENAR TOLEDO';
  fullName  = 'LeNaR ToLeDo';

  customDate : Date = new Date();



}
