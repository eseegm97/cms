import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemComponent } from './message-item';

describe('MessageItem', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
