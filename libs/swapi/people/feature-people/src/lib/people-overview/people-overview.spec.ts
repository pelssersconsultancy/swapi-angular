import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PeopleOverview } from './people-overview';

describe('PeopleOverview', () => {
  let component: PeopleOverview;
  let fixture: ComponentFixture<PeopleOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(PeopleOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
