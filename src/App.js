import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ListChapters from './components/ListChapters';
import Cours from './components/CoursList';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<Home/>}  exact/>
            <Route  path="/Cours" element={<Cours/>} />
            <Route  path="/Cours/:coursName" element={<ListChapters/>} />
            <Route  path="/Cours/:coursName/:chapterName" element={<VideoGallery/>} />
          </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
