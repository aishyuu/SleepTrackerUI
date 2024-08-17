import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataLogsComponent } from './data-logs.component';

describe('DataLogsComponent', () => {
  let component: DataLogsComponent;
  let fixture: ComponentFixture<DataLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataLogsComponent]
    });
    fixture = TestBed.createComponent(DataLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
