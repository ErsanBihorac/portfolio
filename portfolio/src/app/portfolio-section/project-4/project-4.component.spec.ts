import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project4Component } from './project-4.component';

describe('Project4Component', () => {
  let component: Project4Component;
  let fixture: ComponentFixture<Project4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Project4Component]
    });
    fixture = TestBed.createComponent(Project4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
