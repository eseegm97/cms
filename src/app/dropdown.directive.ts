import { Directive, effect, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[cmsDropdown]',
  host: {
    '[class.open]': 'isOpen()',
    '(click)': 'handleClick($event)',
  },
})
export class DropdownDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  readonly isOpen = signal(false);

  constructor() {
    effect(() => {
      const toggle = this.elementRef.nativeElement.querySelector('.dropdown-toggle');
      toggle?.setAttribute('aria-expanded', String(this.isOpen()));
    });
  }

  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;

    if (!target?.closest('.dropdown-toggle')) {
      return;
    }

    event.preventDefault();
    this.isOpen.update((current) => !current);
  }
}