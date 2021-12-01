import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  nextPriority: number = 0;
  labels: any[] = [
    { title: 'Endotoxin', priority: 0 },
    { title: 'Hemoglobin', priority: 0 },
    { title: 'Growth (Performance)', priority: 0 },
    { title: 'Plating (Performance)', priority: 0 },
    { title: 'Cloning (Performance)', priority: 0 },
    { title: 'Total protien', priority: 0 },
  ];

  constructor() {}

  setPriority(label) {
    if (label.priority == 0) label.priority = ++this.nextPriority;
  }
}
