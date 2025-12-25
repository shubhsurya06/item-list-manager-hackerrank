import { createSelector, createFeatureSelector } from "@ngrx/store";
import { InitialItemState } from "./reducers";

export const ItemListSelector = createFeatureSelector<InitialItemState>('itemList');

export const selectItemList = createSelector(
    ItemListSelector,
    (state) => state.itemList
)


