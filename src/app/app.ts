import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarLayoutComponent } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('smart-home');
}
