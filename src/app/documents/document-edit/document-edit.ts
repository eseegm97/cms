import { Component, OnInit } from '@angular/core';
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

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    const value = form.value;
    const newDocument = new Document('', value.name, value.description, value.url, null);
    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
    this.onCancel();
  }

  onCancel(): void {
    this.editMode = false;
  }
}
