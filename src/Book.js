import React, { Component } from 'react';
import './App.css';

class Book extends  Component {
    render (){

        let thumb = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : '';
        
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${thumb}")` }}></div>
                <div className="book-shelf-changer">
                    <select onChange = {(event) => this.props.shelfMoved(
                        this.props.book, event.target.value
                    )}
                    value = {this.props.shelfAtPresent}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}


// bckgd img = url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api



export default Book;