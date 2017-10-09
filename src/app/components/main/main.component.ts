import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people:string[] = [ 'un', 'deux', 'trois', 'quatre' ];

  constructor() { }

  ngOnInit() {
  }

}
