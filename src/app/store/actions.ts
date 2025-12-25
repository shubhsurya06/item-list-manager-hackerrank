import { createAction, props } from "@ngrx/store";
import { IItem } from "../item.mode";

export const addItem = createAction(
    '[Item List] Add Item',
    props<{ item: IItem }>()
)

export const toggleItem = createAction(
    '[Item List] Toggle Item',
    props<{ id: number}>()
)

export const editItem = createAction(
    '[Item List] Edit Item',
    props<{item: IItem}>()
)

export const deleteItem = createAction(
    '[Item List] Delete Item',
    props<{id: number}>()
)