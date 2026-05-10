import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  imports: [],
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css',
})
export class MessageEdit {
  @ViewChild('subject', { static: false }) subjectInput!: ElementRef<HTMLInputElement>;
  @ViewChild('msgText', { static: false }) msgTextInput!: ElementRef<HTMLInputElement>;

  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender = 'GitHub Copilot';

  onSendMessage(): void {
    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;

    const newMessage = new Message('3', subject, msgText, this.currentSender);

    this.addMessageEvent.emit(newMessage);
  }

  onClear(): void {
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';
  }
}
