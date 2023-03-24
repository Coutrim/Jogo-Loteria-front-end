import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MyServiceNameService } from './my-service-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  data: any[];

  constructor(private myServiceNameService: MyServiceNameService) { }

  ngOnInit(): void {
    this.myServiceNameService.getData().subscribe((data: any[]) => {
      this.data = data;
    });
  }

}
