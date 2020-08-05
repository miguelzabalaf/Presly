import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-user',
  templateUrl: './perfil-user.component.html',
  styleUrls: ['./perfil-user.component.scss'],
})
export class PerfilUserComponent implements OnInit {

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

}
