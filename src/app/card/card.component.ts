import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //after importing Input from @angular/core add an input property
  //this will tell the card component template to expect the parent component (app.component.html) to provide the value for this property
  @Input() title = ''
  @Input() username = ''
  @Input() imageUrl = ''
  @Input() content = ''

}
