import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css',
  './big-card.component.effects.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string = "";
  @Input()
  cardTitle:string = "";
  @Input()
  cardDescription:string = ""; 
  @Input()
  cardAuthor:string = "";
  @Input()
  ID:string = '0';

  constructor(){}

  ngOnInit(): void {
  }



}
