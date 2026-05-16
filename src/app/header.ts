import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownDirective } from './dropdown.directive';

@Component({
  selector: 'cms-header',
  imports: [DropdownDirective],
  templateUrl: './header.html',
  styles: `
    .dropdown.open .dropdown-menu {
      display: block;
    }
  `,
})
export class Header {
  constructor(private router: Router) {}

  navigateTo(path: 'documents' | 'messages' | 'contacts') {
    this.router.navigate([`/${path}`]);
  }
}
