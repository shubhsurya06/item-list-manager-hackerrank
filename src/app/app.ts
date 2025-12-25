import { Component, OnInit, signal, inject } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectItemList } from './store/selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IItem } from './item.mode';
import { addItem } from './store/actions';

@Component({
  selector: 'app-root',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('Item List Manager Hackerrank');

  itemStore = inject(Store);

  itemInput = signal<string>('');

  itemList$ : Observable<IItem[]> = this.itemStore.select(selectItemList);

  ngOnInit(): void {
    
  }

  addItem() {
    if (!this.itemInput().length) {
      alert('Please enter item');
      return;
    }

    console.log('This is added item:', this.itemInput());

    let newItem: IItem = {
      id: Date.now(),
      title: this.itemInput(),
      isCompleted: false
    }

    this.itemStore.dispatch(addItem({ item: newItem}));
    this.itemInput.set('');

  }

}
