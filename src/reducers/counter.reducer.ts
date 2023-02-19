import { createReducer , on } from "@ngrx/store";
import { Counter } from "src/model/counter.model";
import * as CounterActions from '../actions/counter.action'

let initalState = <Counter>{count: 0};

export const counterReducer = createReducer(
    initalState,
    on(CounterActions.increase , (state) => ({count: state.count +1})),
    on(CounterActions.descrease , (state) => ({count: state.count -1})),
    on(CounterActions.reset , (state) => ({count: 0}))

)