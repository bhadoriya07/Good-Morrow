import './App.css';
import './Components/Navbar';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const page = 6;
  const [progress, setProgress] = useState(20)
  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={page} category="general" />} ></Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={page} category="sports" />} ></Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={page} category="entertainment" />} ></Route>
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={page} category="business" />} ></Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={page} category="technology" />} ></Route>
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={page} category="science" />} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

