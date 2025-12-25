import { createReducer, on } from "@ngrx/store";
import * as ItemActions from "./actions";
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

    on(ItemActions.addItem, (state, { item }) => ({
        ...state,
        itemList: findIndexAndReturnList([...state.itemList], item)
    })),

    on(ItemActions.toggleItem, (state, { id }) => ({
        ...state,
        itemList: state.itemList.map(ele => ele.id === id ? { ...ele, isCompleted: !ele.isCompleted } : ele)
    })),

    on(ItemActions.editItem, (state, {item}) => ({
        ...state,
        itemList: state.itemList.map(ele => ele.id === item.id ? {...ele, title: item.title} : ele)
    })),

    on(ItemActions.deleteItem,  (state, {id}) => ({
        ...state,
        itemList: state.itemList.filter(item => item.id != id)
    }))
)
