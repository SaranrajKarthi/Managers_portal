import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/app/mock-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  customers = CUSTOMERS;

  constructor() { }

  ngOnInit(): void {
  }

}
