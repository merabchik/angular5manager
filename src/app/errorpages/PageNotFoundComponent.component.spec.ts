import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PageNotFoundComponentComponent } from "./PageNotFoundComponent.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PageNotFoundComponentComponent", () => {

  let fixture: ComponentFixture<PageNotFoundComponentComponent>;
  let component: PageNotFoundComponentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PageNotFoundComponentComponent]
    });

    fixture = TestBed.createComponent(PageNotFoundComponentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
