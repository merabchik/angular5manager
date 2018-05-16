import { RoleGuardService } from "./role-guard.service";
import { TestBed } from "@angular/core/testing";

describe("RoleGuardService", () => {

  let service: RoleGuardService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoleGuardService
      ]
    });
    service = TestBed.get(RoleGuardService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
