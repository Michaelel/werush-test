import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs/operators';
import { DEFAULT_DEBOUNCE_TIME } from '../../shared/constants';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataService } from '../../services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  searchCtrl: FormControl = this.fb.control('');

  constructor(
      private fb: FormBuilder,
      private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.searchCtrl.valueChanges.pipe(
        debounceTime(DEFAULT_DEBOUNCE_TIME),
        untilDestroyed(this),
    ).subscribe(res => this.dataService.searchTerm$.next(res));
    this.searchCtrl.setValue('');

  }


}
