import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dota2',
  templateUrl: './dota2.component.html',
  styleUrls: ['./dota2.component.css']
})
export class Dota2Component implements OnInit {

  private hero_name : string;
  private hero_type : string;
  private hero_skill:{
    skill1:string,
    skill2:string,
    skill3:string,
    skill4:string
  }


  constructor() { }

  ngOnInit() {
    this.hero_name = "Earth Spirit"
    this.hero_type = "Str"
    this.hero_skill = {
      skill1:"Boulder Smash",
      skill2:"Rolling Boulder",
      skill3:"Geomagnetic Grip",
      skill4:"Magnetize"
    }
  }

}
