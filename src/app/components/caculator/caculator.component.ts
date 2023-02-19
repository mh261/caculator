import { Component } from '@angular/core';
import { createSelector } from '@ngrx/store';
@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent {

 state = { counter1:3 , counter2: 4 }
  

}
