import React, { Component } from 'react';
import CourBox from './CoursBox';
import './CoursList.css';
import axios from 'axios';

class CoursList extends Component {
    componentDidMount(){
        axios.get('http://localhost:5000/Cours').then(res =>{
            this.setState({CoursList: res.data});
        })
    }
    state = {
        CoursList : []
    }
    render() {
        return (
            <div className='CoursList' >
                {this.state.CoursList.map(Cours=><CourBox key={Cours} imgCours="https://i0.wp.com/blog.petehouston.com/wp-content/uploads/2018/01/udemy-gogo.jpg?fit=1280%2C720&ssl=1" titleCours={Cours}/>)}
            </div>
        );
    }
}

export default CoursList;