import { Component } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateComponent } from 'src/app/guards/can-deactivate';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements IDeactivateComponent {
 
  canExit(): boolean {
    console.log('read');
    if (confirm("Do you wish to Please confirm")) {
      return true;
    } else {
      return false;
    }
  }
}

