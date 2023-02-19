import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/model/counter.model';
import * as CounterActions from '../../../actions/counter.action'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  count$: Observable<Counter>;
  constructor(private store: Store< {counter: Counter}>){
    this.count$ = store.select('counter');

  }

  increase(){
    this.store.dispatch(CounterActions.increase());
  }
  decrease(){
    this.store.dispatch(CounterActions.descrease());
  }
  reset(){
    this.store.dispatch(CounterActions.reset());
  }

}
