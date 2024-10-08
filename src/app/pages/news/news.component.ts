import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  newsArticles: any[] = [];
  isLoading = false;

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.getLatestNews();
  }

  async getLatestNews() {
    const apiUrl =
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=9c8725399eb2437aa61ba45f1cfb2bc2';

    this.isLoading = true;
    this.spinner.show();

    try {
      const response = await axios.get(apiUrl);
      this.newsArticles = response.data.articles;
      console.log(this.newsArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      this.isLoading = false;
      this.spinner.hide();
      console.log('News fetching completed');
    }
  }
}
