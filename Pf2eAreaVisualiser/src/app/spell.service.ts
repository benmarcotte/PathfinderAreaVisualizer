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

  async getSpellByKey(key: string): Promise<Spell | undefined> {
    const data = await fetch(`${this.url}/${key}`)
    return (await data.json()) ?? {};
  }

  async getSpellsByKey(key: string): Promise<Spell[]> {
    const data = await fetch(`${this.url}/search/findSpellsByKeyStartsWith?key=${key}`)
    const json = (await data.json()) ?? [];
    console.log(json)
    return json._embedded.spells;
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }
}
