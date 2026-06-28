import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  messages: Message[] = [];

  constructor(private http: HttpClient) {
    this.fetchMessages();
  }

  fetchMessages() {
    this.http
      .get<Message[]>(
        'https://cms-wdd430-86c22-default-rtdb.firebaseio.com/messages.json'
      )
      .subscribe((messages: Message[]) => {
        this.messages = messages ?? [];
        this.messageChangedEvent.emit(this.messages.slice());
      });
  }

  storeMessages() {
    this.http
      .put(
        'https://cms-wdd430-86c22-default-rtdb.firebaseio.com/messages.json',
        JSON.stringify(this.messages),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
      )
      .subscribe(() => {
        this.messageChangedEvent.emit(this.messages.slice());
      });
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message | null {
    for (const message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }
    return null;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
  }
}
