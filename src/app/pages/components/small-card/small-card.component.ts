import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css',
   './small-card.component.effects.css']
})
export class SmallCardComponent {
  @Input()
  photoCover = '';
  @Input()
  cardTitle = '';
  @Input()
  ID='0';
}
