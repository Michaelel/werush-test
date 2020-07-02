import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ComponentState } from '../component-state/component-state.enum';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap, tap } from 'rxjs/operators';
import { GameInterface } from '../../interfaces/game.interface';
import { defineState } from '../../shared/pure-functions';

@UntilDestroy()
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
  readonly componentState = ComponentState;
  state = ComponentState.Loading;
  games: GameInterface[];

  constructor(
      private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.searchTerm$.pipe(
        untilDestroyed(this),
        tap(() => this.state = ComponentState.Loading),
        switchMap(res => this.dataService.getGames(res)),
    ).subscribe(
        data => {
          this.games = (data.docs.map(n => ({ id: n.id, ...n.data() })) as GameInterface[]);
          this.state = defineState(this.games);
        },
        e => {
            alert(`Something went wrong; Error: ${e}`);
            this.state = ComponentState.Error;
        },
    );
  }

}
