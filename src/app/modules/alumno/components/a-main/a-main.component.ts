import { Component } from '@angular/core';
import { ATopbarService } from '../../services/a-topbar.service';

@Component({
  selector: 'app-a-main',
  templateUrl: './a-main.component.html',
  styleUrl: './a-main.component.css'
})
export class AMainComponent {

  menu: any;

  constructor(private aTopbarService: ATopbarService){
    this.menu = this.aTopbarService.menu;
  }

}
