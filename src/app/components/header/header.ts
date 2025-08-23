import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(public auth: Auth) {}

  logout() {
    this.auth.logout(); // เรียก service logout
  }
}
