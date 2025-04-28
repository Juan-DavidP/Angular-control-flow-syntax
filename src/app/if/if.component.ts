import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [],
  templateUrl: './if.component.html',
  styleUrl: './if.component.scss'
})
export class IfComponent {
  protected isVisible = true;
}
