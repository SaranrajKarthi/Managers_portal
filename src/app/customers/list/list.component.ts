import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from 'src/app/mock-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers = CUSTOMERS;

  constructor() { }

  ngOnInit(): void {
  }

}
