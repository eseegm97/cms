import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageEdit } from '../message-edit/message-edit';
import { Message } from '../message.model';
import { MessageItemComponent } from '../message-item/message-item';
import { MessageService } from '../message';

@Component({
  selector: 'cms-message-list',
  imports: [CommonModule, MessageItemComponent, MessageEdit],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }

  onAddMessage(message: Message): void {
    this.messages.push(message);
  }
}
