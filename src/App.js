import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog';
import Home from './Component/Home';
// import NoteState from './context/notes/NoteState';
// import Layout from './Component/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          {/* <NoteState> */}
          <Route path='/blog' element={<Blog />} />
          {/* </NoteState> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App

