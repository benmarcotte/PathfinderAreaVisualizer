import { Injectable } from '@angular/core';
import { Spell } from './spell';

@Injectable({
  providedIn: 'root'
})
export class SpellService {
  url = 'http://localhost:8080/spells'


  async getAllSpells(): Promise<Spell[]> {
    const data = await fetch(this.url)
    const json = await data.json();

    return json._embedded.spells ?? [];
  }

  async getSpellByKey(key: string): Promise<Spell> {
    const data = await fetch(`${this.url}/${key}`)
    return (await data.json()) ?? {};
  }

  async getSpellsByKey(key: string): Promise<Spell[]> {
    if (key != ""){
      const data = await fetch(`${this.url}/search/findSpellsByKeyStartsWith?key=${key.toLowerCase().replaceAll(" ", "")}`)
      const json = (await data.json()) ?? [];
      console.log(json)
      return json._embedded.spells;
    }
    else return []
  }
}
