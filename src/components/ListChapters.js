import React, { Component } from 'react';
import Chapter from './Chapter';
import './ListChapters.css';
import axios from 'axios';

class ListChapters extends Component {
    componentDidMount(){
        let cours = window.location.href.split('/')[4];
        axios.get('http://localhost:5000/Cours/'+cours).then(res =>{
            this.setState({ChapterList: res.data,cours : cours});
        })
    }
    state = {
        ChapterList : [],
        cours : '',        
    }
    render() {
        return (
            <div className='ChaptersList'>
                <h1>Liste des chapitres</h1>
                {this.state.ChapterList.map(chapter=><Chapter key={chapter} coursTitle={this.state.cours} chapterTitle={chapter}/>)}                
            </div>
        );
    }
}

export default ListChapters;