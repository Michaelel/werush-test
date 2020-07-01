import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private firestore: AngularFirestore) {
    from(
        this.firestore.collection('game').ref
            .orderBy('rating', 'desc')
            .get()
    ).subscribe(data => console.log(data.docs.map(n => ({ id: n.id, ...n.data() }))));
  }
}
