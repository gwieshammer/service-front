import {Component, Input, OnInit} from '@angular/core';
import {ProcessService} from '../services/process.service';
import {AlertService} from '../../common/alert/services/alert.service';

@Component({
  selector: 'app-check-variable',
  templateUrl: './check-variable.component.html',
  styleUrls: ['./check-variable.component.css']
})
export class CheckVariableComponent implements OnInit {

  @Input() executionId: string;
  @Input() name: string;
  data: any;
  c: any;
  checked: string;
  @Input() t: string;
  @Input() f: string;

  constructor(
    private processService: ProcessService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getVar();
  }

  onCheckSubmit(value) {
    this.processService.setVariable(this.executionId, this.name, value).subscribe(data => {
      this.data = data;
      this.alertService.success(this.data.text, true);
      this.getVar();
    });
  }

  private getVar() {
    this.processService.getVariable(this.executionId, this.name).subscribe(c => {
      console.log('check', c);
      if (c === true) {
        this.checked = this.t;
      } else {
        this.checked = this.f;
      }
    });
  }

}