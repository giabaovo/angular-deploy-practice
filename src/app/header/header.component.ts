import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureFired = new EventEmitter<string>();

  onSelect(featureSelected: string) {
    this.featureFired.emit(featureSelected)
  }
}
