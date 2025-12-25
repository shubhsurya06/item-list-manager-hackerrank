import { createReducer, on } from "@ngrx/store";
import { addItem } from "./actions";
import { IItem } from "../item.mode";

export interface InitialItemState {
    itemList: IItem[]
}

function findIndexAndReturnList(list: IItem[], item: IItem) {
    let index = list.findIndex(ele => item.title == ele.title);
    if (index === -1) {
        list.push(item);
    }
    return list;
}

export const initialState: InitialItemState = {
    itemList: []
}

export const itemReducer = createReducer(
    initialState,

    on(addItem, (state, { item }) => ({
        ...state,
        itemList: findIndexAndReturnList([...state.itemList], item)
    }))
)
