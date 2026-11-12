import { TestBed } from "@angular/core/testing";

import { DemoComponentLibService } from "./demo-component-lib.service";

describe("DemoComponentLibService", () => {
  let service: DemoComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoComponentLibService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
