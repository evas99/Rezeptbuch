import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZutatenlisteComponent } from './zutatenliste.component';

describe('ZutatenlisteComponent', () => {
  let component: ZutatenlisteComponent;
  let fixture: ComponentFixture<ZutatenlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZutatenlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZutatenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
