import {Component, OnInit} from '@angular/core';
import {MigrationService} from '../services/migration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../admin-template/layout/components/alert/services/alert.service';

@Component({
  selector: 'app-process-migration',
  templateUrl: './process-migration.component.html',
  styleUrls: ['./process-migration.component.css']
})
export class ProcessMigrationComponent implements OnInit {

  migrationForm: FormGroup;
  theMigrateVersionAndTargetObject: any;
  loading: false;
  submitted: false;

  constructor(
    private migrationService: MigrationService,
    private formBuilder: FormBuilder,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.migrationForm = this.formBuilder.group({
      processInstanceId: ['', Validators.required],
      sourceVersion: ['', Validators.required],
      targetVersion: ['', Validators.required],
      sourceAct: ['', Validators.required],
      targetAct: ['', Validators.required]
    });
  }

  get f() {
    return this.migrationForm.controls;
  }

  onSubmit() {
    this.migrationService.migrateProcessInstance(this.migrationForm.value).subscribe(data => {
      console.log('migrate', data);

    });
  }

}
