import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../domain/slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[];
  index: number;
  constructor() {
    this.slides = [];
    this.index = 0;
  }

  ngOnInit(): void {
    this.updateView();
    const leftArrow = document.getElementsByClassName('leftArrow')[0];
    const rightArrow = document.getElementsByClassName('rightArrow')[0];

    leftArrow.addEventListener('click', () => {
      this.index--;
      if (this.index < 0) this.index = this.slides.length - 1;
      this.updateView();
    });

    rightArrow.addEventListener('click', () => {
      this.index++;
      if (this.index >= this.slides.length) this.index = 0;
      this.updateView();
    });
  }

  updateView() {
    const url = this.slides[this.index].srcImg;
    const pathToDest = this.slides[this.index].url;
    const imageContainer = document.getElementById('imageContainer');
    console.log(url);

    imageContainer!.innerHTML =
      '<a target="_blank" href="' +
      pathToDest +
      '"><img style="width:100%;" src="' +
      url +
      '"/></a>';
  }
}
