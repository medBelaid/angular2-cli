import { Component, OnInit } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId: module.id,
  selector: 'app-my-maps-project',
  templateUrl: 'my-maps-project.component.html',
  styleUrls: ['my-maps-project.component.css'],
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class MyMapsProjectComponent implements OnInit {

  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
