import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageEdit } from '../message-edit/message-edit';
import { Message } from '../message.model';
import { MessageItemComponent } from '../message-item/message-item';

@Component({
  selector: 'cms-message-list',
  imports: [CommonModule, MessageItemComponent, MessageEdit],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
  messages: Message[] = [
    new Message('1', 'Grades', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message('2', 'Assignment 3', 'When is assignment 3 due', 'Steve Johnson'),
    new Message('3', 'Re: Assignment 3', 'Assignment 3 is due on Saturday at 11:30 PM', 'Bro. Jackson'),
    new Message('3', 'Help with assignment 3', 'Can I meet with you sometime. I need help with assignment 3', 'Mark Smith'),
    new Message('3', 'Re: Help with assignment 3', 'I can meet with you today at 4:00 PM in my office.', 'Bro. Jackson')
  ];

  onAddMessage(message: Message): void {
    this.messages.push(message);
  }
}
