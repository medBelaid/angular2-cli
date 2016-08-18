import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-puzzle',
  templateUrl: 'puzzle.component.html',
  styleUrls: ['puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  switch1Num: number;
  switch2Num: number;
  switch3Num: number;
  switch4Num: number;
  constructor() { }

  ngOnInit() {
    this.switch1Num = Math.round(Math.random());
    this.switch2Num = Math.round(Math.random());
    this.switch3Num = Math.round(Math.random());
    this.switch4Num = Math.round(Math.random());
    console.log(this.switch1Num, this.switch2Num,this.switch3Num, this.switch4Num)
  }

}
