import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { GameInterface } from '../interfaces/game.interface';
import { LIMIT_GAMES_COUNT } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchTerm$: Subject<string> = new Subject();

  constructor(private firestore: AngularFirestore) {
    // for (let i = 0; i < 100; i++) {
    //   this.createGame();
    // }
  }

  getGames(title: string): Observable<any> {
    return from(
        this.firestore.collection('game').ref
            .orderBy('title')
            .limit(LIMIT_GAMES_COUNT)
            .startAt(title)
            .endAt(title + '\uf8ff')
            .get()
    );
  }

  // createGame(): void {
  //   const payload = {
  //     title: `${Math.floor(Math.random() * 100000)}`,
  //     img: 'https://748073e22e8db794416a-cc51ef6b37841580002827d4d94d19b6.ssl.cf3.rackcdn.com/not-found.png',
  //   };
  //   new Promise<any>((resolve, reject) => {
  //     this.firestore
  //         .collection('game')
  //         .add(payload)
  //         .then(res => {}, err => reject(err));
  //   }).then(res => {});
  // }
}
