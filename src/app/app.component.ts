import { Component, ViewChild } from '@angular/core';
import { NoneComponent } from './encaptulation/none/none.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'misc-learn';

  @ViewChild(NoneComponent, { static: false })
  private noneComnent!: NoneComponent;

  increment():void {
    this.noneComnent.increment();
  }
}
