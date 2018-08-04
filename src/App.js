import React from 'react';
import * as BooksAPI from './BooksAPI';
import Search from './Search';
import Shelves from './Shelves';
import './App.css';
import { Route } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {

    books: []
  }

  refreshBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }
  componentDidMount() {
    this.refreshBooks();
  };

  shelfMoved = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.refreshBooks();
    })
  }

  render() {
    return (
      <div className = "app">
        
      <Route exact path="/" render={() => (
        <Shelves books = {this.state.books} shelfMoved = {this.shelfMoved}/>
      )}/>

      <Route path="/search" render={() => (
        <Search shelfMoved = {this.shelfMoved} books={this.state.books}/>
      )}/>
       </div>   
    )
  }
}

export default BooksApp;
