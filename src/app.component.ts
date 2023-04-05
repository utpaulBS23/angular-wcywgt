import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersService } from './order.service';
import {
  DataStateChangeEventArgs,
  LoadingIndicator,
  LoadingIndicatorModel,
} from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [OrdersService],
})
export class AppComponent {
  public data: Observable<DataStateChangeEventArgs>;
  public pageOptions: Object;
  public state: DataStateChangeEventArgs;
  loadingIndicator: LoadingIndicatorModel;
  groupOptions: any;
  constructor(private service: OrdersService) {
    this.data = service;
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.service.execute(state);
  }

  public ngOnInit(): void {
    this.groupOptions = {
      showGroupedColumn: true,
    };
    this.loadingIndicator = { indicatorType: 'Spinner' };
    this.pageOptions = { pageSize: 10 };
    let state = { skip: 0, take: 10 };
    this.service.execute(state);
  }
}
