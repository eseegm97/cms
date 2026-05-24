import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ContactList } from "./contact-list/contact-list";
import { ContactDetail } from "./contact-detail/contact-detail";
import { Contact } from './contact.model';
import { ContactService } from './contact';

@Component({
  selector: 'cms-contacts',
  imports: [NgIf, ContactList, ContactDetail],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements OnInit {
  selectedContact: Contact = new Contact('', '', '', '', '', []);

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
  }
}
