import { Component } from '@angular/core';
import { FdDatetime } from '@fundamental-ngx/core';

@Component({
  selector: 'app-datetime-example',
  templateUrl: './datetime-example.component.html'
})
export class DatetimeExampleComponent {
    date: FdDatetime = FdDatetime.getToday();
}
