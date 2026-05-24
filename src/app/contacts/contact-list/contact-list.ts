import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { Contact } from '../contact.model';
import { ContactItem } from '../contact-item/contact-item';
import { ContactService } from '../contact';

@Component({
  selector: 'cms-contact-list',
  imports: [NgFor, ContactItem],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }
}
