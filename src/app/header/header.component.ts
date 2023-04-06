import {
  style
} from '@angular/animations';
import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  MenuItem
} from 'primeng/api';
import {
  ApostasService
} from '../apostas.service';
import {
  Message,
  MessageService
} from 'primeng/api';
 import { DatePipe } from '@angular/common';
import { Aposta } from '../aposta';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  visibleSidebar1: any;


  constructor(private router: Router, private apostasService: ApostasService) {}
  items: MenuItem[];

  cars: any[];
  apostas: ApostasService[];
  data: ApostasService[];

  apostas2 : Aposta[];


  ngOnInit() {
    this.apostasService.getApostas().subscribe((data: any[]) => {
      this.data = data;

    });

    this.items = [{

        icon: 'pi pi-fw pi-chart-bar',
        label: 'JOGO LOTERIA',
        items: [{
            label: 'Dashboard',
            icon: 'pi pi-fw pi-chart-bar',
            command: () => {
              this.router.navigate(['dashboard']);
            }
          },
          {
            label: 'Nova aposta',
            icon: 'pi pi-fw pi-plus',
            command: () => {
              alert('clicou')
            }
          },
          {
            label: 'Apostas',
            icon: 'pi pi-fw pi-dollar',
            command: () => {
              alert('clicou')
            }
          }
        ]
      },

    ];
  }




}
