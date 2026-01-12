import React, { Component } from 'react';
import NewsItem from './NewsItem';
import SampleResponse from '../SampleResponse.json';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: SampleResponse.articles,
    };
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1610607aabcb474dac643bbbdfa3699b';
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });

    console.log(parsedData);
  }

  render() {
    console.log('render');
    return (
      <div>
        <div className="container my-5">
          <h2>Good Morning Prashant !</h2>
          <h4>Here are the top headlines</h4>
          <div className="row">
            {this.state.articles && this.state.articles.slice(0, 10).map((article, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem title={article.title ? article.title.slice(0, 45) : 'No Title'} description={article.description ? article.description.slice(0, 80) : 'No Description'} imgUrl={article.urlToImage || 'https://placehold.co/1920x1080'} newsUrl={article.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default News;

// API Key - 1610607aabcb474dac643bbbdfa3699b
