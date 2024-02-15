import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit{

  menuItems:MenuItem[] = [];
  themeSelection: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem("theme");
    if(theme) {
      this.themeSelection = (theme === 'dark') ? true : false;      
    }
  }

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Pipes of Angulars',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts And Dates',
            icon: 'pi pi-align-left',
            routerLink:'/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No commons',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          }
        ]
      },
      { label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-align-left',
            routerLink: 'custom'
          },

        ]
      },

    ]
  }

  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem("theme", theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = `md-${theme}-indigo.css`


  }
}
