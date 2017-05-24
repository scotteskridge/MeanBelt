import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectFriendComponent } from './inspect-friend.component';

describe('InspectFriendComponent', () => {
  let component: InspectFriendComponent;
  let fixture: ComponentFixture<InspectFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
