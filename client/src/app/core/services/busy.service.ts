import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestConst = 0;

  constructor(private spinnerService: NgxSpinnerService) {}

  busy() {
    this.busyRequestConst++;
    this.spinnerService.show(undefined, {
      type: 'pacman',
      bdColor: 'rgba(255,255,255,0.6)',
      color: 'black',
    });
  }

  idle() {
    this.busyRequestConst--;
    if (this.busyRequestConst <= 0) {
      this.busyRequestConst = 0;
      this.spinnerService.hide();
    }
  }
}