import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contacts } from './contacts/contacts';
import { Documents } from './documents/documents';
import { MessageList } from './messages/message-list/message-list';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'documents', pathMatch: 'full' },
	{ path: 'documents', component: Documents },
	{ path: 'messages', component: MessageList },
	{ path: 'contacts', component: Contacts },
	{ path: '**', redirectTo: 'documents' }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
