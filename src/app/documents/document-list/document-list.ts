import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DocumentItem } from "../document-item/document-item";
import { Document } from '../document.model';
import { Document as DocumentService } from '../document';

@Component({
  selector: 'cms-document-list',
  imports: [NgFor, RouterLink, DocumentItem],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }


}
