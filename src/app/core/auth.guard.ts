import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  /*const authService = inject(UserService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  // Navigate to the login page with the return url
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;*/
  return true;
};
