import { Auth.service.tsService } from "./auth.service.ts.service";
import { TestBed } from "@angular/core/testing";

describe("Auth.service.tsService", () => {

  let service: Auth.service.tsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Auth.service.tsService
      ]
    });
    service = TestBed.get(Auth.service.tsService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
