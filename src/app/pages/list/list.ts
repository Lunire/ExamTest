import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Coffee } from '../../services/coffee';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  imports: [MatCardModule, CommonModule, MatIcon, MatButtonModule, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List implements OnInit {
  products: any[] = [];
  menuLabel: string = '';

  constructor(
    private route: ActivatedRoute,
    private coffeeService: Coffee
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    let typeName = '';

    if (id === 'hot') typeName = 'ร้อน';
    if (id === 'cool') typeName = 'เย็น';
    if (id === 'smooty') typeName = 'ปั่น';

    this.menuLabel = typeName;
    this.products = this.coffeeService.getByType(typeName);
  }
}
