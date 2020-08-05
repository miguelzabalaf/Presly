import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  
  slideOpts = {
    centeredSlides: true,
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1.1,
    initialSlide: 1,
  };

  constructor() { }

  ngOnInit() {
  }

}
