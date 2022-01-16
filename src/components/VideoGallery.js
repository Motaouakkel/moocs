import React, { Component } from 'react';
 import './VideoGallery.css';
 import axios from  'axios' ;

class VideoGallery extends Component {
    state={
        CoursName : '',
        ChapterName: '',
        ListVideo : []
    }
    componentDidMount(){
        let coursName = window.location.href.split('/')[4];
        coursName = coursName.replaceAll('%20',' ');
        let chapterName = window.location.href.split('/')[5];
        chapterName = chapterName.replaceAll('%20',' ');
        this.setState({CoursName : coursName,ChapterName: chapterName});
        axios.get(`http://localhost:5000/Cours/${coursName}/${chapterName}`).then(res =>{
            this.setState({ListVideo: res.data});
        })
      
    }

    changeVideo = (e)=>{
        if(e.target.tagName === 'DIV'){
            let video = e.target;
            let src = e.target.children[0].getAttribute('src');
            let listVideo = document.querySelectorAll('.video-list .vid');
            let mainVideo = document.querySelector('.main-video video') ;
            let title = document.querySelector('.main-video .title');
            listVideo.forEach(vid=> vid.classList.remove('active'));
            video.classList.add('active');
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        }
        if(e.target.tagName === 'VIDEO'){
            let video = e.target;
            let src = video.getAttribute('src');
            let listVideo = document.querySelectorAll('.video-list .vid');
            listVideo.forEach(vid=> vid.classList.remove('active'));
            video.parentElement.classList.add('active');
            let mainVideo = document.querySelector('.main-video video') ;
            mainVideo.src=src;
            let text = video.parentElement.children[1].innerHTML;
            let title = document.querySelector('.main-video .title');
            title.innerHTML =  text;
        }
        if(e.target.tagName === 'H3'){
            let video =  e.target.parentElement.children[0];
            let src = video.getAttribute('src');
            let listVideo = document.querySelectorAll('.video-list .vid');
            listVideo.forEach(vid=> vid.classList.remove('active'));
            video.parentElement.classList.add('active');
            let mainVideo = document.querySelector('.main-video video') ;
            mainVideo.src=src;
            let text = video.parentElement.children[1].innerHTML;
            let title = document.querySelector('.main-video .title');
            title.innerHTML =  text;
        }
            
    }

    render() {
        return (
            <div>
                <h3 className='ChapterName'>{this.state.ChapterName}</h3>
                <div className='container'>
                    <div className='main-video'>
                        <div className='video'>
                        {/* {`http://localhost:5000/Cours/${this.state.CoursName}/${this.state.ChapterName}/${this.state.ListVideo[0]}`} */}
                            <video src="" controls  autoPlay muted></video>
                            <h3 className='title'>title</h3>
                        </div>
                    </div>
                    <div className='video-list'>
                    {this.state.ListVideo.map(video=>
                        <div className='vid ' onClick={this.changeVideo}>
                            <video src={`http://localhost:5000/Cours/${this.state.CoursName}/${this.state.ChapterName}/${video}`}  muted  onClick={this.changeVideo} ></video>
                            <h3 className='title' >{video} </h3>
                        </div>
                        )}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoGallery;