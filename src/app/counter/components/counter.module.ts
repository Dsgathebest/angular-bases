import { NgModule } from '@angular/core';
import { NameComponent } from './counter/counter.component';


@NgModule({
  declarations:[
    NameComponent
  ],
  exports: [
    NameComponent
  ]

})
export class CounterModule {

}
