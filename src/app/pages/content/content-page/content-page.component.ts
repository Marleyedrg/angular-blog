import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from 'src/app/data/dataFake';


@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  @Input()
  photoCover:string = '';
  private id:string|null = "0"

  link:string = 'https://betterprogramming.pub/angular-16-whats-new-and-what-to-expect-e14e15e500f8';

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value =>{
        this.id = value.get("id");
      }
    );
    this.setValuesToConponent(this.id);
  }
  setValuesToConponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo;
  }


}
