import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IDeactivateComponent } from 'src/app/guards/can-deactivate';

@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.scss']
})
export class NoneComponent implements OnInit , IDeactivateComponent{

  counter = 0;
  isLoad = true;
  sfrm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.sfrm = this.fb.group({
      name: ['']
    });
  }

  ngOnInit(): void {
    console.log(this.counter);
  }

  increment(): void {
    this.counter += 1;
    console.log(this.counter);
  }

  decrement(): void {
    this.counter -= 1;
    console.log(this.counter);
  }

  canExit(): boolean {
    console.log('read');
    return true;
  }
}
