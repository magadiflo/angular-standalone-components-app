import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { Dog } from '../../interfaces/dog.interface';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DogViewComponent implements OnInit {

  dog$!: Observable<Dog | undefined>;

  constructor(
    private _dogService: DogsService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this._activatedRoute.paramMap
      .pipe(
        map(param => this._dogService.dogs[Number(param.get('index'))])
      );
  }

}
