import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { numberAdd } from 'src/app/components/caculator/caculator/actions/caculator.action';
import { CaculatorState } from 'src/app/components/caculator/model/caculator.models';
import * as CaculatorActions from '../caculator/caculator/actions/caculator.action'
@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  title = 'caculator';

  result$: Observable<CaculatorState>;
  content: string = '0'

  ngOnInit(){
    this.result$.subscribe((data) => {
      if(data.operation == '='){
        this.content = data.firstNum  + data.secondNum;
      }else if( data.operation != "Clear"){
        this.content= data.firstNum + data.operation + data.secondNum;
      }
    })
}
  constructor(private store: Store <{caculator: CaculatorState}>){
    this.result$ = store.select('caculator');
  }

  numberAdd($event: any){
    this.store.dispatch(CaculatorActions.numberAdd({number:$event.target.data}));
  }

  operatorAdd($event: any){
    this.store.dispatch(CaculatorActions.operatorAdd({operator: $event.target.data}));
  }
}
