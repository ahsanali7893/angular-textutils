import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  text: string = '';

  convertToUpperCase() {
    this.text = this.text.toUpperCase();
  }

  convertToLowerCase() {
    this.text = this.text.toLowerCase();
  }
}
