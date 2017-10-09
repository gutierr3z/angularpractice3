import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people:string[] = [ 'un', 'deux', 'trois', 'quatre' ];

  show:boolean = true;

  theValue:number = 3;

  isSpecial:boolean = true;
  canSave:boolean = true;
  currentClasses = {};

  constructor() { 
    this.setCurrentClasses();
  }

  setCurrentClasses() {
    this.currentClasses = {
      savable: this.canSave,
      special: this.isSpecial
    }
  }

  ngOnInit() {
  }

}
