import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { ContactList } from "./contact-list/contact-list";
import { ContactDetail } from "./contact-detail/contact-detail";
import { Contact } from './contact.model';

@Component({
  selector: 'cms-contacts',
  imports: [NgIf, ContactList, ContactDetail],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  selectedContact: Contact = new Contact('', '', '', '', '', null);
}
