import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Document as DocumentModel } from '../document.model';
import { Document as DocumentService } from '../document';

@Component({
  selector: 'cms-document-detail',
  imports: [RouterLink],
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css',
})
export class DocumentDetail implements OnInit {
  document!: DocumentModel;

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.document = this.documentService.getDocument(id)!;
  }
}
