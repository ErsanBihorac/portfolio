import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project5Component } from './project-5.component';

describe('Project5Component', () => {
  let component: Project5Component;
  let fixture: ComponentFixture<Project5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project5Component]
    });
    fixture = TestBed.createComponent(Project5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
