import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { StatusPage } from './status.page';

describe('StatusPage', () => {
  let component: StatusPage;
  let fixture: ComponentFixture<StatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
