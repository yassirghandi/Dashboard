import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from 'src/app/shared/combo-box/combo-box.component';

@Component({
  selector: 'app-dashboardapps',
  standalone: true,
  imports: [CommonModule ,FooterComponent, HeaderComponent, ComboBoxComponent],
  templateUrl: './dashboardapps.component.html',
  styleUrl: './dashboardapps.component.scss'
})
export class DashboardappsComponent implements AfterViewInit {
  
  title="title"
  value="value"
  chart:any;

  // Data for the Orders card
  orders = {pending: 640,completed: 1420};
  // Data for the Revenue card
  revenue = {expenses: 2100,income: 9640};
  customer = {active : 8272 , registred : 25402};
  comments= {new : 120 , responded : 805};
 // Data for the Fournisseur card
  fournisseurs = 45;
  suppliers=30;

  products = [
    { name: 'Space T-Shirt', category: 'Clothing', rate: 100, color: '#ff8c00' },
    { name: 'Portal Sticker', category: 'Accessories', rate: 16, color: '#00bcd4' },
    { name: 'Supernova Sticker', category: 'Accessories', rate: 67, color: '#ff4081' },
    { name: 'Marker', category: 'Accessories', rate: 67, color: '#ff1231' },
  ];
  

  ngAfterViewInit(): void {
    // Register all necessary components from Chart.js
    Chart.register(...registerables);

    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('stockChart') as HTMLCanvasElement;
  
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [{
            label: 'Stock Level Over Time',
            data: [150, 200, 175, 220, 190, 240],
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderColor: '#007bff',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,  // Important: Set to false to take full width/height
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Canvas element not found!');
    }
  }
  
  

  

}
