import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  article: any;
  isLoading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.getArticle();
  }

  async getArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    const apiUrl = `https://newsapi.org/v2/everything?domains=${id}&apiKey=9c8725399eb2437aa61ba45f1cfb2bc2`; // API call may vary based on how you structure your data

    try {
      const response = await axios.get(apiUrl);
      this.article = response.data.articles[0];
      console.log(this.article);
    } catch (error) {
      console.error('Error fetching article:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
