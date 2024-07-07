import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [UserService,ToastrService]
})

export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  showPassword = false;
  loading = false;
  error = '';


  constructor(private router: Router, private formBuilder: FormBuilder, private authService: UserService, private route: ActivatedRoute,private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f['login'].value, this.f['password'].value)
      .subscribe(
        success => {
          if (success) {
            this.toastr.success('Success message', 'Success');
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigate([returnUrl]);
          } else {
            this.toastr.error('Login failed', 'Failed');
            this.error = 'Login failed';
            this.loading = false;
          }
        },
        error => {
          this.toastr.error('Error message', 'Error');
          this.error = 'An error occurred';
          this.loading = false;
        }
      );
    // For simplicity, we're not doing real authentication.
    //localStorage.setItem('isLoggedIn', 'true');
    //this.router.navigate(['/home']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
