import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  paragraph = 'Secret password: tuna';
  isParagraphDisplay = false;
  log: any = [];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isParagraphDisplay = !this.isParagraphDisplay;
    this.log.push(new Date());
  }
}
