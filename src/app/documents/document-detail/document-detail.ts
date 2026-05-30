import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Document as DocumentModel } from '../document.model';
import { Document as DocumentService } from '../document';
import { WindRef } from '../../wind-ref';

@Component({
  selector: 'cms-document-detail',
  imports: [RouterLink],
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css',
})
export class DocumentDetail implements OnInit {
  document!: DocumentModel;
  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private windRefService: WindRef
  ) {}

  ngOnInit() {
    this.nativeWindow = this.windRefService.getNativeWindow();
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.document = this.documentService.getDocument(id)!;
    });
  }

  onView() {
    const url = this.document.url;
    this.nativeWindow.open(url);
  }
}
