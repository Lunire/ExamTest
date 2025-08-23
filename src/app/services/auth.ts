import { Injectable } from '@angular/core';
import jsonData from '../../assets/data.json';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private users = jsonData.users;
  public isLoggedIn = false;
  public currentUser: { username: string; role: string } | null = null;

  constructor(private router: Router) {
    const userJson = localStorage.getItem('currentUser');
    if (userJson) {
      this.currentUser = JSON.parse(userJson);
      this.isLoggedIn = true;
    }
  }

  login(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.isLoggedIn = true;
      this.currentUser = { username: user.username, role: user.role };
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      this.router.navigate(['/main']); // redirect หน้า main
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this.currentUser = null;
    this.router.navigate(['']);
  }
}
