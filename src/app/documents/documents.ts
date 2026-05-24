import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { DocumentList } from "./document-list/document-list";
import { DocumentDetail } from "./document-detail/document-detail";
import { Document } from './document.model';
import { Document as DocumentService } from './document';

@Component({
  selector: 'cms-documents',
  imports: [NgIf, DocumentList, DocumentDetail],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents implements OnInit {
  selectedDocument!: Document;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe(
      (document: Document) => {
        this.selectedDocument = document;
      }
    );
  }
}
