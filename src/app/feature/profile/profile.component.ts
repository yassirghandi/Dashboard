import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HeaderComponent } from '../header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent,ReactiveFormsModule,FooterComponent,CommonModule,HttpClientModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers:[UserService]
})
export class ProfileComponent {

  profileForm: FormGroup;
  user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    cin: '123456789'
  };
  passwordFieldType: string = 'password';  // Track the type of the password field

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({
      username: [this.user.username, Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedUser = {
        username: this.profileForm.get('username')?.value,
        password: this.profileForm.get('password')?.value
      };
      
    }
  }
}
