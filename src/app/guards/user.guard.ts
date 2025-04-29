import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  let user=JSON.parse(localStorage.getItem('studentuser')!)
  let router=inject(Router)
  return true;
};
