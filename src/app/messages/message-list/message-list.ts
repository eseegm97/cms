import { Component } from '@angular/core';
import { MessageEdit } from '../message-edit/message-edit';
import { MessageItemComponent } from '../message-item/message-item';

@Component({
  selector: 'cms-message-list',
  imports: [MessageItemComponent, MessageEdit],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {}
