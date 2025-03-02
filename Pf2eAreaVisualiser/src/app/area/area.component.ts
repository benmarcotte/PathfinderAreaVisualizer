import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurstComponent } from "./burst/burst.component";
import { LineComponent } from '../line/line.component';
import { ConeComponent } from './cone/cone.component';
import { EmanationComponent } from './emanation/emanation.component';

@Component({
  selector: 'app-area',
  imports: [CommonModule, BurstComponent, LineComponent, ConeComponent, EmanationComponent],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent {
  @Input() area?: String;
 
}
