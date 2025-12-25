import { createAction, props } from "@ngrx/store";
import { IItem } from "../item.mode";


export const addItem = createAction(
    '[Item List] Add Item',
    props<{ item: IItem }>()
)