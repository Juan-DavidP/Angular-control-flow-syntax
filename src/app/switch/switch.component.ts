import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  protected selectValue = "option 1";
}
