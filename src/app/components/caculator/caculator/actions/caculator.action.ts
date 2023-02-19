
import { createAction, props } from "@ngrx/store";

export const numberAdd = createAction(
    '[CaculatorState] NumberAdd ',
    props <{number: string}>()
)

export const operatorAdd  = createAction(

    '[CaculatorState] OperatorAdd',
    props <{operator: string }>()

// export const clear = createAction(

)
