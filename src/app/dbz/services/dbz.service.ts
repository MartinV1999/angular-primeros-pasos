import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    }
  ];

  addCharacter( character: Character): void {

    const newCharacter = {id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  deleteById(id: string ):void {
    this.characters = this.characters.filter(item => item.id !== id)
  }

}
