import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cms-root',
  imports: [RouterOutlet],
  templateUrl: './cms.html',
  styleUrl: './cms.css'
})
export class App {
  protected readonly title = signal('cms');
}
