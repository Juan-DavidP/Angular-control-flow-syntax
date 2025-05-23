import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss'
})
export class PlaceholderComponent {
  isImageVisible = false;

  showImage() {
    setTimeout(() => {
      this.isImageVisible = true;
    }, 4000);
  }
}
