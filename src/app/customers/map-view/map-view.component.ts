import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  lat: number = 12.94149;
  long : number = 80.18312;

  constructor() { }

  ngOnInit(): void {
  }

}
