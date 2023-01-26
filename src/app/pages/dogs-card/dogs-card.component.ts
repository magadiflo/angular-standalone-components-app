import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dog } from '../../interfaces/dog.interface';

/**
 * * Este también es un compoenente del tipo Standalone
 */

@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DogsCardComponent implements OnInit {

  @Input() dog!: Dog;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
