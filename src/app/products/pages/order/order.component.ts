import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit{

  isUpperCase = false;
  orderBy?: keyof Hero;
  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lintern',
      canFly: true,
      color: Color.green
    }
  ];

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }

  changeFilter( value: keyof Hero) {
    this.orderBy = value;
  }

  ngOnInit() {

  }
}
