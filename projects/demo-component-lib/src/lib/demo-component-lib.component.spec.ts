import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DemoComponentLibComponent } from "./demo-component-lib.component";

describe("DemoComponentLibComponent", () => {
  let component: DemoComponentLibComponent;
  let fixture: ComponentFixture<DemoComponentLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponentLibComponent],
    });
    fixture = TestBed.createComponent(DemoComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
