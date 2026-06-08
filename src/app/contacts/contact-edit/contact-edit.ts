import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ContactItem } from '../contact-item/contact-item';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-edit',
  imports: [NgFor, NgIf, ContactItem],
  templateUrl: './contact-edit.html',
  styleUrl: './contact-edit.css',
})
export class ContactEdit {
  groupContacts: Contact[] = [];

  onRemoveItem(index: number) {
    this.groupContacts.splice(index, 1);
  }

  onCancel() {}
}
