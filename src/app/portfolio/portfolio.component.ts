import { Component, OnInit } from '@angular/core';
import { Slide } from '../domain/slide';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  slides: Slide[];

  constructor() {
    this.slides = [
      {
        srcImg: '../../assets/how high.jpg',
        url: 'https://github.com/RomainProjet31/portfolioweb',
      },
      {
        srcImg: '../../assets/me.jpg',
        url: 'https://github.com/RomainProjet31/portfolioweb',
      },
    ];
  }

  ngOnInit(): void {}
}
