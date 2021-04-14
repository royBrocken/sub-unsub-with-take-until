import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export abstract class UnsubscribeBaseComponent implements OnDestroy {
  public readonly unsubscribe$ = new Subject<boolean>();

  ngOnDestroy() {
    console.log('unsub')
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
