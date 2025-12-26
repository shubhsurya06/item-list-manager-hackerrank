import { Component, signal, inject } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectItemList } from './store/selector';
import { Observable } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { IItem } from './item.mode';
import * as ItemActions from './store/actions';
import { BgColor } from './directives/bg-color';

@Component({
  selector: 'app-root',
  imports: [FormsModule, AsyncPipe, NgClass, BgColor],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Item List Manager Hackerrank');

  /** Injected NgRx Store for managing item state. */
  itemStore = inject(Store);

  /* Signal to hold the current input value for adding or editing an item. */
  itemInput = signal<string>('');
  editId = signal<number>(0);

  /* Observable to select the list of items from the store. */
  itemList$: Observable<IItem[]> = this.itemStore.select(selectItemList);

  /*
  * Resets the input field and editId signal to their initial states.
  */
  resetInput() {
    this.itemInput.set('');
    this.editId.set(0);
  }

  /*
  * Adds a new item or edits an existing item based on the current state of editId.
  * If editId is set, it updates the existing item; otherwise, it adds a new item.
  */
  addItem() {
    if (!this.itemInput().length) {
      alert('Please enter item');
      return;
    }

    let newItem: IItem = {
      id: this.editId() ? this.editId() : Date.now(),
      title: this.itemInput(),
      isCompleted: false
    }

    this.itemInput.set('');

    if (this.editId()) {
      this.itemStore.dispatch(ItemActions.editItem({ item: newItem }));
      this.editId.set(0);
      return;
    }
    this.itemStore.dispatch(ItemActions.addItem({ item: newItem }));

  }

  /*
  * Toggles the completion status of an item.
  * @param item - The item to be toggled.
  */
  toggleTask(id: number) {
    this.itemStore.dispatch(ItemActions.toggleItem({ id }));
  }

  /*
  * Prepares the item for editing by setting the input field and editId signals.
  * @param item - The item to be edited.
  */
  editItem(item: IItem) {
    this.itemInput.set(item.title);
    this.editId.set(item.id);
  }

  /*
  * Deletes an item from the store based on its ID.
  * @param id - The ID of the item to be deleted.
  */
  deleteItem(id: number) {
    this.itemStore.dispatch(ItemActions.deleteItem({ id }));
  }
}
