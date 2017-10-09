import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  currentStyles = {};

  users:string[];

  constructor( public dataService:DataService ) { 

    this.users = this.dataService.getUsers();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses() {
    this.currentClasses = {
      savable: this.canSave,
      special: this.isSpecial
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'color': this.canSave ? 'pink' : 'orange',
      'font-size': this.canSave ? '25px' : '10px'
    }
  }

  ngOnInit() {
  }

}
