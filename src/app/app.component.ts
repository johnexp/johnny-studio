import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  modelFieldTypes: any[];
  viewFieldTypes: any[];
  modelFieldType: string = '';
  viewFieldType: string = '';
  hasViewField: boolean = true;
  modelViewFieldRel: {};

  ngOnInit() {
    this.initModelFieldTypes();
    this.initViewFieldTypes();
    this.initModelViewFieldRel();
  }

  initModelFieldTypes() {
    this.modelFieldTypes = [
      { value: 'string', viewValue: 'String' },
      { value: 'enum', viewValue: 'Enum' },
      { value: 'number', viewValue: 'Number' },
      { value: 'date', viewValue: 'Date' },
      { value: 'buffer', viewValue: 'Buffer' },
      { value: 'boolean', viewValue: 'Boolean' },
      { value: 'mixed', viewValue: 'Mixed' },
      { value: 'objectid', viewValue: 'ObjectId' },
      { value: 'array', viewValue: 'Array' }
    ];
  }

  initViewFieldTypes() {
    this.viewFieldTypes = [
      { value: 'text', viewValue: 'Text' },
      { value: 'number', viewValue: 'Number' },
      { value: 'select', viewValue: 'Select Item' },
      { value: 'radiobutton', viewValue: 'Radio Button' },
      { value: 'checkbox', viewValue: 'Checkbox' },
      { value: 'textarea', viewValue: 'TextArea' },
      { value: 'slider', viewValue: 'Slider' },
      { value: 'toggle', viewValue: 'Toggle' },
      { value: 'chips', viewValue: 'Chips' },
      { value: 'datepicker', viewValue: 'Datepicker' },
      { value: 'gridmodal', viewValue: 'GridModal' }
    ];
  }

  initModelViewFieldRel() {
    this.modelViewFieldRel = {
      string: ['text', 'textarea'],
      enum: ['select', 'radiobutton'],
      number: ['number', 'slider'],
      date: ['datepicker'],
      boolean: ['checkbox', 'toggle'],
      objectid: ['select', 'gridmodal'],
      array: {
        string: ['chips'],
        enum: ['checkbox', 'select'],
        objectid: ['select', 'gridmodal']
      }
    }
  }

}
