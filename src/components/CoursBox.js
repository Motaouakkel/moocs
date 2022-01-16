import React, { Component } from 'react';
import './CoursBox.css';

class CoursBox extends Component {
    render() {
        return (
            <div className='CourBox'>
                <a href={'/Cours/'+this.props.titleCours}>
                    <img src={this.props.imgCours} className='imgCours'></img>
                    <img src={require('../images/arrow.png')} className='arrow'></img>
                    <div className='title'>{this.props.titleCours}</div>
                </a>
            </div>
        );
    }
}

export default CoursBox;