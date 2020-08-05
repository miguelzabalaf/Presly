import { Component, OnInit, Input } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { PerfilUserComponent } from '../perfil-user/perfil-user.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  constructor( private modalCtrl: ModalController,
               private routerOulet: IonRouterOutlet ) { }

  ngOnInit() {}

  async presentInformationUser() {
    const userModal = await this.modalCtrl.create({
      component: PerfilUserComponent,
      mode: 'ios',
      cssClass: 'userModal',
      swipeToClose: true,
      backdropDismiss: true
      // presentingElement: this.routerOulet.nativeEl
    });

    return await userModal.present()
  }

}
