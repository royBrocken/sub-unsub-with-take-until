import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { UnsubscribeBaseComponent } from 'src/core/unsubscribe-base.component';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.scss'],
})
export class Feature1Component
  extends UnsubscribeBaseComponent
  implements OnInit {
  private fakeApi = { get: () => interval(500) };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.fakeApi.get().pipe(takeUntil(this.unsubscribe$), finalize(() => console.log('done objs'))
    ).subscribe();
  }
}
