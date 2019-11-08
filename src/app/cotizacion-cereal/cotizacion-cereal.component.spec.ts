import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionCerealComponent } from './cotizacion-cereal.component';

describe('CotizacionCerealComponent', () => {
  let component: CotizacionCerealComponent;
  let fixture: ComponentFixture<CotizacionCerealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionCerealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionCerealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
