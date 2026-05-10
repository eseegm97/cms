import { Routes } from '@angular/router';
import { Contacts } from './contacts/contacts';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';

export const routes: Routes = [
	{ path: '', redirectTo: 'documents', pathMatch: 'full' },
	{ path: 'documents', component: Documents },
	{ path: 'messages', component: MessageList },
	{ path: 'contacts', component: Contacts },
	{ path: '**', redirectTo: 'documents' }
];
