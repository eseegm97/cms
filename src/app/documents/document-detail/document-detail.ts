import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.document = this.documentService.getDocument(id)!;
    });
  }
}
