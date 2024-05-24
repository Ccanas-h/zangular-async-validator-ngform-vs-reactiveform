import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  constructor() { }

    items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];

    // Simulate an HTTP call that returns a single item by ID
    getItemById(id: number): Observable<any> {
      let idFound = this.items.find(item => item?.id == id) ?? null;
      return of(idFound); // returns an Observable of the item
    }

}
