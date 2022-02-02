import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emuted',
  templateUrl: './emuted.component.html',
  styleUrls: ['./emuted.component.scss']
})
export class EmutedComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
    console.log('');
  }

  ngOnInit(): void {
    console.log('InIt...' ,this.route.snapshot.data['data']);
  }

}
