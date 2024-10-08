import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  text: string = '';
  showToast: boolean = false;

  convertToUpperCase() {
    this.text = this.text.toUpperCase();
  }

  convertToLowerCase() {
    this.text = this.text.toLowerCase();
  }

  removeExtraSpaces() {
    this.text = this.text.trim().replace(/\s+/g, ' ');
  }

  copyText() {
    if (this.text) {
      navigator.clipboard.writeText(this.text).then(() => {
        this.showToastMessage();
      }).catch((err) => {
        console.error('Could not copy text: ', err);
      });
    } else {
      alert('No text to copy!');
    }
  }

  speakText() {
    if (this.text) {
      const utterance = new SpeechSynthesisUtterance(this.text);
      speechSynthesis.speak(utterance);
    } else {
      alert('No text to speak!');
    }
  }

  showToastMessage() {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}
