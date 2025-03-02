import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpellService } from '../spell.service';
import { Spell } from '../spell';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from '../area/area.component';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule, AreaComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  spellService = inject(SpellService);
  spell: Spell | undefined;

  constructor() {
    const spellName = this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params)
    this.spellService.getSpellByKey(spellName).then((spell) => {
      this.spell = spell;
    });
  }

}
