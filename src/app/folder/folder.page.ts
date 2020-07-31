import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { UserPopoverComponent } from '../components/user-popover/user-popover.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    watchSlidesProgress: true,
  };

  constructor( private activatedRoute: ActivatedRoute,
               public popoverCtrl: PopoverController ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async presentUserPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: UserPopoverComponent,
      cssClass: 'userPopover',
      event: ev,
      mode: 'ios'
    });
    return await popover.present();
  }

}