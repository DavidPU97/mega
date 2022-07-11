import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  @Input() order: Order;

  ngOnInit(): void {
  }

}
