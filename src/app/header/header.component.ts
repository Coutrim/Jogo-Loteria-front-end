import {
  style
} from '@angular/animations';
import {
  Component
} from '@angular/core';
import {
  MenuItem
} from 'primeng-lts/api';
import {
  Message,
  MessageService
} from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  visibleSidebar1: any;


  constructor() {}
  items: MenuItem[];


  ngOnInit() {
    this.items = [{


        label: 'JOGO LOTERIA',
        icon:'pi pi-fw pi-dollar',
        items: [{
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
          },
          {
            label: 'Nova aposta',
            icon: 'pi pi-fw pi-plus'
          },
          {
            label: 'Apostas',
            icon: 'pi pi-fw pi-dollar'
          }
        ]
      },

    ];
  }




}
