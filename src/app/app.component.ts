import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  fieldTypes: any[];
  fieldType: string = '';

  ngOnInit() {
    this.initFieldTypes();
  }

  initFieldTypes() {
    this.fieldTypes = [
      { value: 'text', viewValue: 'Text' },
      { value: 'number', viewValue: 'Number' },
      { value: 'select', viewValue: 'Select Item' },
      { value: 'radiobutton', viewValue: 'Radio Button' },
      { value: 'checkbox', viewValue: 'Checkbox' },
      { value: 'textarea', viewValue: 'TextArea' },
      { value: 'slider', viewValue: 'Slider' },
      { value: 'toggle', viewValue: 'Toggle' }
    ];
  }

}
