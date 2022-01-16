import React, { Component } from 'react';
import './Chapter.css';

class Chapter extends Component {
    render() {
        return (
            <a href={'/Cours/'+this.props.coursTitle+'/'+this.props.chapterTitle}>
                <div className='Chapter'>
                    <img src='http://iconsetc.com/icons-watermarks/flat-circle-white-on-black/classica/classica_books/classica_books_flat-circle-white-on-black_512x512.png'></img>
                    <div className='ChapterTitle'>{this.props.chapterTitle}</div>
                </div>
            </a>
        );
    }
}

export default Chapter;