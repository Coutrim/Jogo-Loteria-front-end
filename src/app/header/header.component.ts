import {
  style
} from '@angular/animations';
import {
  Component
} from '@angular/core';
import {
  MenuItem
} from 'primeng/api';
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
        items: [{
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
            command:()=>{
              alert('clicou')
            }
          },
          {
            label: 'Nova aposta',
            icon: 'pi pi-fw pi-plus',
            command:()=>{
              alert('clicou')
            }
          },
          {
            label: 'Apostas',
            icon: 'pi pi-fw pi-dollar',
            command:()=>{
              alert('clicou')
            }
          }
        ]
      },

    ];
  }




}
