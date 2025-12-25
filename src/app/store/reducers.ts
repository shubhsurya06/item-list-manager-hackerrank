import { createReducer, on } from "@ngrx/store";
import { addItem } from "./actions";
import { IItem } from "../item.mode";

export interface InitialItemState {
    itemList: IItem[]
}

export const initialState: InitialItemState = {
    itemList: []
}

export const itemReducer = createReducer(
    initialState,

    on(addItem, (state, { item }) => ({
        ...state,
        itemList: [...state.itemList, item]
    }))
)
