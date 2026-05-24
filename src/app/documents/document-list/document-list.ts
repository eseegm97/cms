import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DocumentItem } from "../document-item/document-item";
import { Document } from '../document.model';
import { Document as DocumentService } from '../document';

@Component({
  selector: 'cms-document-list',
  imports: [NgFor, DocumentItem],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList implements OnInit {
  documents: Document[] = [];
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
