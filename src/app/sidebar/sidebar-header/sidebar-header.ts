import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidebar-header',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './sidebar-header.html',
  styleUrls: ['./sidebar-header.scss'],
})
export class SidebarHeader {
  // @Output() toggle = new EventEmitter<void>();

  // onToggle() {
  //   this.toggle.emit();
  // }
}
