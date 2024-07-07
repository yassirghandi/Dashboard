import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [FooterComponent,CommonModule,HeaderComponent,ProfileComponent,HttpClientModule],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.scss',
  providers:[UserService]
})
export class AppsComponent {

  apps = [
    { name: 'Ressource Humain', link: 'https://example.com/app1', icon: 'assets/icons/RH_logo.jpg' },
    { name: 'Iventaire', link: 'https://example.com/app2', icon: 'assets/icons/inventory logo.png' },
    { name: 'Application 3', link: 'https://example.com/app3', icon: 'assets/icons/inventor2_logo.jpg' },
    { name: 'Application 4', link: 'https://example.com/app1', icon: 'assets/icons/app1.png' },
    { name: 'Application 5', link: 'https://example.com/app2', icon: 'assets/icons/app2.png' },
    { name: 'Application 6', link: 'https://example.com/app3', icon: 'assets/icons/app3.png' },
    { name: 'Application 7', link: 'https://example.com/app2', icon: 'assets/icons/app2.png' },
    { name: 'Application 8', link: 'https://example.com/app3', icon: 'assets/icons/app3.png' },
    { name: 'Application 7', link: 'https://example.com/app2', icon: 'assets/icons/app2.png' },
    { name: 'Application 8', link: 'https://example.com/app3', icon: 'assets/icons/app3.png' },
  ];
}
