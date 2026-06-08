import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Document } from '../document.model';
import { Document as DocumentService } from '../document';

@Component({
  selector: 'cms-document-edit',
  imports: [FormsModule],
  templateUrl: './document-edit.html',
  styleUrl: './document-edit.css',
})
export class DocumentEdit implements OnInit {
  originalDocument!: Document;
  document: Document = new Document('', '', '', '', null);
  editMode: boolean = false;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        if (id === undefined || id === null) {
          this.editMode = false;
          return;
        }
        this.originalDocument = this.documentService.getDocument(id)!;
        if (this.originalDocument === undefined || this.originalDocument === null) {
          return;
        }
        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
      }
    );
  }

  onSubmit(form: NgForm): void {
    const value = form.value;
    const newDocument = new Document('', value.name, value.description, value.url, null);
    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
    this.router.navigate(['/documents']);
  }

  onCancel(): void {
    this.router.navigate(['/documents']);
  }
}
