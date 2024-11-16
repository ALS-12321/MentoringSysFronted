import { Component } from '@angular/core';
import { TTopbarService } from '../../services/t-topbar.service';

@Component({
  selector: 'app-t-main',
  templateUrl: './t-main.component.html',
  styleUrl: './t-main.component.css'
})
export class TMainComponent {
  menu: any;
  constructor(private tutorMenuService: TTopbarService){
    this.menu = this.tutorMenuService.menu;
  }

}
