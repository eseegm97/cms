import { Component } from '@angular/core';
import { Header } from './header';

@Component({
  selector: 'cms-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
