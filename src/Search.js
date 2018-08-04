import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import './App.css';

class Search extends Component {
    state = {
        query: '',
        booksSearched: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.updateBooksSearched(query);
    }

    updateBooksSearched = (query) => {
        if (query) {
          BooksAPI.search(query).then((booksSearched) => {

            if (booksSearched.error) {
                this.setState({ booksSearched : []});
            } else {
                this.setState({booksSearched: booksSearched})
            }
        })  
        } else {
            this.setState({ booksSearched : []});
        }
        
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to = "/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" value={this.state.query} onChange = {(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                {this.state.booksSearched.map(booksSearched => {

                    let shelfy = "none";
                    
                    this.props.books.map(book => (
                        book.id === booksSearched.id ? shelfy = book.shelf : ''
                    ));
                        return (
                            <li key = {booksSearched.id}>
                            <Book book = {booksSearched} shelfMoved = {this.props.shelfMoved} shelfAtPresent = {shelfy} />
                            </li>
                        );
                    })
                }
            </ol>
            </div>
          </div>
        );
    }
}




export default Search;