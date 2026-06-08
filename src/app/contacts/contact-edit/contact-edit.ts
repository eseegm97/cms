import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactItem } from '../contact-item/contact-item';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-edit',
  imports: [NgFor, NgIf, FormsModule, ContactItem],
  templateUrl: './contact-edit.html',
  styleUrl: './contact-edit.css',
})
export class ContactEdit {
  contact: Contact | null = null;
  groupContacts: Contact[] = [];

  onSubmit(form: NgForm) {}

  onRemoveItem(index: number) {
    this.groupContacts.splice(index, 1);
  }

  onCancel() {}
}
