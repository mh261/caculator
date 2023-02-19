// import { createReducer, createSelector, on } from "@ngrx/store";
import { createSelector } from "@ngrx/store";
import { State } from "src/model/caculator.state";
import * as CaculatorActions from '../actions/caculator.action'


export const selectCounter1 = (state: State) => state.counter1;
export const selectCounter2 = (state: State) => state.counter2;
export const selectTotal = createSelector(
    selectCounter1,
    selectCounter2,
    (counter1,counter2) => counter1 + counter2
);
