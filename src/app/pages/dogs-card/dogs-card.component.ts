import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Dog } from '../../interfaces/dog.interface';

/**
 * * Este también es un compoenente del tipo Standalone. 
 * * Un componente standalone importa implícitamente sus dependencias de plantilla,
 * * es por eso que aquí debemos importar el módulo del enrutador ya que usaremos
 * * el routerLink para poder redireccionar 
 */

@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class DogsCardComponent implements OnInit {

  @Input() dog!: Dog;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
