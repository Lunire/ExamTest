import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {
  menuType: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.menuType = this.route.snapshot.paramMap.get('id') ?? '';
  }
}
