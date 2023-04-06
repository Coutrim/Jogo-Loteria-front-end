import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  DatePipe
} from '@angular/common';
import { map } from 'rxjs/operators';
import { Aposta } from './aposta';

@Injectable({
  providedIn: 'root'
})
export class ApostasService {

  constructor(private http: HttpClient) {}


  ngOnInit() {}

  getApostas() {
    return this.http.get('http://localhost:8080/apostas-backend/api/apostas');
  }

}
