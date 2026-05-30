import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DropdownDirective } from './dropdown.directive';

@Component({
  selector: 'cms-header',
  imports: [DropdownDirective, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styles: `
    .dropdown.open .dropdown-menu {
      display: block;
    }
  `,
})
export class Header {
}
