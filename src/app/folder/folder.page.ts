import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  slideOpts = {
    centeredSlides: true,
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1.1,
    initialSlide: 1,
  };
    // slidesOptions = {
    //   initialSlide: 0,
    //   direction: 'horizontal',
    //   speed: 300,
    //   spaceBetween: 8,
    //   freeMode: true,
    //   loop: true
    // };
  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
