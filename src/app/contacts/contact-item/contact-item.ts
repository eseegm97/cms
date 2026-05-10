import { Component, input } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  imports: [],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
export class ContactItem {
  contact = input.required<Contact>();
}


