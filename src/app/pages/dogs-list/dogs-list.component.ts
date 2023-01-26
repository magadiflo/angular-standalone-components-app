import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsService } from '../../services/dogs.service';
import { Dog } from '../../interfaces/dog.interface';

import { DogsCardComponent } from '../dogs-card/dogs-card.component';

/**
 * * Standalone Component
 * * ********************
 * * Este componente no es un componente cualquiera, sino que es un standalone component,
 * * eso significa que este componente no necesita ser declarado en el declarations: []
 * * de algún módulo, tal como lo haría un componente normal. Esto es porque este componente,
 * * se le coloca el atributo standalone en true, haciéndolo un componente Standalone, es decir
 * * este componente será a la vez su propio módulo, en el que además se puede agregar los atributos
 * * propios de un módulo como el imports, etc.
 * *
 * * Los standalone components gestionan explícitamente sus propias dependencias
 */

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss'],
  standalone: true,
  imports: [CommonModule, DogsCardComponent],
})
export class DogsListComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private readonly _dogService: DogsService) { }

  ngOnInit(): void {
    this.dogs = this._dogService.dogs;
  }

}
