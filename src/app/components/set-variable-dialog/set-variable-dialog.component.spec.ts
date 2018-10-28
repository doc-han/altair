import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TranslateModule } from '@ngx-translate/core';

import * as services from '../../services';
import { SetVariableDialogComponent } from './set-variable-dialog.component';
import { VariablesEditorComponent } from '../variables-editor/variables-editor.component';

describe('SetVariableDialogComponent', () => {
  let component: SetVariableDialogComponent;
  let fixture: ComponentFixture<SetVariableDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetVariableDialogComponent, VariablesEditorComponent ],
      imports: [
        FormsModule,
        CodemirrorModule,
        ClarityModule,
        TranslateModule.forRoot()
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetVariableDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
