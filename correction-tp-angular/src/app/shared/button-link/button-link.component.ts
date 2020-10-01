import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'st-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
})
export class ButtonLinkComponent implements OnInit {
  @Input() href: string;
  @Input() path: string[];
  external = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (!this.href && this.path?.length) {
      this.external = false;
      this.href = this.router.createUrlTree(this.path).toString();
    }
  }

  handleClick(event: MouseEvent): void {
    if (this.external) {
      return;
    }
    event.preventDefault();
    this.router.navigateByUrl(this.href);
  }
}
