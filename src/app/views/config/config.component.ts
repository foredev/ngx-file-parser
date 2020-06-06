import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgxFileParserConfig } from 'projects/ngx-file-parser/src/public-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit, OnDestroy {
  @Input() config: NgxFileParserConfig;
  @Output() outConfig = new EventEmitter<NgxFileParserConfig>();

  supportedFiles = ['.csv', '.json'];
  buttonColors = ['transparent', 'primary', 'warn', 'accent'];

  configForm: FormGroup;
  configSub: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.configForm = this.fb.group({
      csvNamedProperties: [this.config.csvNamedProperties],
      accepts: [
        this.config.accepts,
        [Validators.required, Validators.minLength(1)],
      ],
      buttonColor: [this.config.btnColor as string, [Validators.required]],
      btnText: [
        this.config.btnText,
        [Validators.required, Validators.minLength(1)],
      ],
    });
    this.onChanges();
  }
  onChanges(): void {
    if (this.configForm.valid) {
      this.configSub = this.configForm.valueChanges.subscribe((val) => {
        const btnColor =
          val.buttonColor === 'transparent' ? '' : val.buttonColor;
        this.outConfig.emit({
          ...this.config,
          accepts: val.accepts,
          csvNamedProperties: val.csvNamedProperties,
          btnColor: btnColor,
          btnText: val.btnText,
        } as NgxFileParserConfig);
      });
    }
  }
  ngOnDestroy() {
    this.configSub.unsubscribe();
  }
}
