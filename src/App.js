import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Posts from './components/Posts'
import SinglePost from './components/SinglePost'

export default function App() {
  return(
    <BrowserRouter>
        <Route path='/' exact component={Posts} />
        <Route path='/:id' component={SinglePost} />
    </BrowserRouter>
  )
};