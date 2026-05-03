import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cms-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './cms.css'
})
export class App {
  protected readonly title = signal('cms');
}
