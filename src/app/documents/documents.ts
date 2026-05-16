import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DocumentList } from "./document-list/document-list";
import { DocumentDetail } from "./document-detail/document-detail";
import { Document } from './document.model';

@Component({
  selector: 'cms-documents',
  imports: [NgIf, DocumentList, DocumentDetail],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class Documents {
  selectedDocument!: Document;
}
