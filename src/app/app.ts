import { Component } from '@angular/core';
import { Header } from './header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cms-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
