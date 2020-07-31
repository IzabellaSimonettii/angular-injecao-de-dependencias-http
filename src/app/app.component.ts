import { Component, Input } from '@angular/core';
import { Previsao } from 'src/model/previsao';
import { PrevisoesService } from './previsoes.service';
import { Info } from '../model/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public previsoes: Previsao[];
  public longitude: string;
  public cidade: string;

  @Input() info: Info;

  constructor(
    private previsoesService: PrevisoesService) {
  }

  changeCity(cidadeInput) {

    this.cidade = cidadeInput.value;

    this.previsoesService.obterPrevisoes(this.cidade).subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });

    // this.info.timezone = this.longitude;

    console.log(cidadeInput.value);
  }

}
