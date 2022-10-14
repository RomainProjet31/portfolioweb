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
        srcImg: '../../assets/Github_logo_PNG1.png',
        url: 'https://github.com/RomainProjet31/',
      },
      {
        srcImg: '../../assets/itchio_icon.png',
        url: 'https://eldermanable.itch.io/',
      },
    ];
  }

  ngOnInit(): void {}
}
