import { Component } from '@angular/core';
import { Header } from './header';
import { Contacts } from "./contacts/contacts";
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';

@Component({
  selector: 'cms-root',
  imports: [Header, Contacts, Documents, MessageList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedFeature: string = 'documents';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }
}
