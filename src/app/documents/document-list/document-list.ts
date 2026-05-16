import { Component, EventEmitter, Output } from '@angular/core';
import { DocumentItem } from "../document-item/document-item";
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  imports: [DocumentItem],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      'd1',
      'Project Proposal',
      'Initial proposal outlining project scope and goals.',
      'https://example.com/docs/project-proposal',
      null
    ),
    new Document(
      'd2',
      'Requirements Checklist',
      'Checklist of required features and acceptance criteria.',
      'https://example.com/docs/requirements-checklist',
      null
    ),
    new Document(
      'd3',
      'Design Notes',
      'Notes on architecture, UI decisions, and technical tradeoffs.',
      'https://example.com/docs/design-notes',
      null
    ),
    new Document(
      'd4',
      'API Reference',
      'Reference for endpoints, payloads, and response formats.',
      'https://example.com/docs/api-reference',
      null
    ),
    new Document(
      'd5',
      'Deployment Guide',
      'Step-by-step guide for staging and production deployment.',
      'https://example.com/docs/deployment-guide',
      null
    ),
  ];

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
