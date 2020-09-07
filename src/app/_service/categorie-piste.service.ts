import { Injectable } from '@angular/core';
import programme from 'src/assets/data/comp_j/programmePiste.json';

@Injectable({
  providedIn: 'root'
})
export class CategoriePisteService {

  prog: {id: number, Catégorie: string, Garçons: string, Filles: string} [] = programme;

  constructor() { }

  getProgByCat( cat) {
    return this.prog.filter(s => s.Catégorie === cat);
  }
}
