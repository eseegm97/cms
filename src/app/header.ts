import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-header',
  imports: [],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  constructor(private router: Router) {}

  navigateTo(path: 'documents' | 'messages' | 'contacts') {
    this.router.navigate([`/${path}`]);
  }
}
