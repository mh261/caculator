import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducers/counter.reducer';
import { CounterComponent } from './components/counter/counter.component';
import { CaculatorComponent } from './components/caculator/caculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CaculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer

    }, {})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
