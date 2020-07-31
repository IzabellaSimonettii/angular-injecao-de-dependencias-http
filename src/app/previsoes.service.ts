import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Previsao } from 'src/model/previsao';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  // previsoes: Previsao[] = [{
  //   data: '20/02/2020 15:00',
  //   descricao: 'Sol',
  //   tempMax: 32,
  //   tempMin: 27,
  //   humidity: 0.87,
  //   imgURL: '../assets/image/01d.png'
  // },
  // {
  //   data: '20/02/2020 18:00',
  //   descricao: 'Sol com nuvens',
  //   tempMax: 28,
  //   tempMin: 22,
  //   humidity: 0.85,
  //   imgURL: '../assets/image/02d.png'
  // }, {
  //   data: '20/02/2020 21:00',
  //   descricao: 'Noite limpa',
  //   tempMax: 24,
  //   tempMin: 18,
  //   humidity: 0.82,
  //   imgURL: '../assets/image/01n.png'
  // }];

  constructor(
    private httpClient: HttpClient
  ) { }

  static obterPrevisoes() {
    throw new Error('Method not implemented.');
  }


  public obterPrevisoes(cidade): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast',
      { params: { q: cidade, appid: '2498f875bd0286199ff75a5911f476bd', units: 'metric', lang: 'pt_br', cnt: '9' } });
  }

}
