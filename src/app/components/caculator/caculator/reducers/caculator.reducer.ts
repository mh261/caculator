import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { CaculatorState } from "src/app/components/caculator/model/caculator.models"
import * as CaculatorActions from '../caculator/actions/caculator.action'



export const intialState= <CaculatorState>{
    firstNum: '0',
    secondNum: '0',
    operation: '' , 
    result: 0,
}

export const CaculatorReducer = createReducer(
    intialState, 
    on(CaculatorActions.numberAdd, (state , action) => {
        let newState = { ...state };    
        if(state.firstNum == '0')
        {
            newState.firstNum = action.number + state.firstNum;
            // console.log(newState);
        } else if(state.operation == "+") {
            if(state.secondNum == ""){
                newState = {
                ...state,
                secondNum: action.number , 
                result: state.result + Number(action.number),
                }
            } else {
                newState = {
                    ...state,
                    secondNum: state.secondNum + action.number,
                    result: Number(state.firstNum) + Number(state.secondNum+ action.number),
                }
            }
        } else if(state.operation == "-"){
            if(state.secondNum == ""){
                newState = {
                    ...state,
                    secondNum: action.number, 
                    result: state.result - Number(action.number)
                }
            }else {
                newState = {
                    ...state, 
                    secondNum: state.secondNum + action.number,
                    result: Number(state.firstNum) - Number(state.secondNum + action.number),
                }
            }
        }


    return newState;
    }),





    on(CaculatorActions.operatorAdd, (state, action ) => {
        let newState = { ...state };    
        if(action.operator == "Clear"){
            newState= {
                ...state,
                firstNum: '',
                secondNum: '',
                result: 0, 
                operation: ''
            }
        }
        return newState;

    })

    
);

            

    
    
