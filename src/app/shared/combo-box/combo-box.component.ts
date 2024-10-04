import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combo-box',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './combo-box.component.html',
  styleUrl: './combo-box.component.scss'
})
export class ComboBoxComponent {

  selectedApp: string;
  currentRoute: string;

  apps = [
    { name: 'Gestion de Stock', route: '/dashboard' },
    { name: 'Resource Humain', route: '/dashboardRH' },
    { name: 'Deplacement', route: '/dashboard3' }
  ];

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    this.selectedApp = this.currentRoute; // Set current component as selected
  }

  navigateToDashboard() {
    if (this.selectedApp) {
      this.router.navigate([this.selectedApp]);
    }
  }
}
