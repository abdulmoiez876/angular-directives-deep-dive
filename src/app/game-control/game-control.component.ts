import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: ReturnType<typeof setInterval> | undefined;
  number: number = 1;
  @Output() emittingNumber = new EventEmitter<{num: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.number ++;
      this.emittingNumber.emit({
        num: this.number
      })
    }, 1000)
  }

  pauseGame() {
    clearInterval(this.interval);
  }

}
