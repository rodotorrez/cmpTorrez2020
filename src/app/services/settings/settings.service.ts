import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/blue-dark.css',
    tema: 'blue-dark'
  };
  // tslint:disable-next-line:variable-name
  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }


  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));

    }
    this.aplicarTema( this.ajustes.tema);
  }

  aplicarTema( tema: string) {

    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url ) ;

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
