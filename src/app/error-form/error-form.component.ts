import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnInit {

  @Input() field;
  
  constructor() { }

  ngOnInit() {
    
  }

}
