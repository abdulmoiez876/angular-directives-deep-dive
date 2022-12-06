import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '84-assignment-practice';
  numberReceived: number = 0; 

  onNumberIncremented(event: {num: number}) {
    this.numberReceived = event.num;
  }
}
