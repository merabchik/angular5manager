import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ContractDetailsComponent } from './contract.details.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Contract.detailsComponent', () => {

  let fixture: ComponentFixture<ContractDetailsComponent>;
  let component: ContractDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ContractDetailsComponent]
    });

    fixture = TestBed.createComponent(ContractDetailsComponent);
    component = fixture.componentInstance;

  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });

});
