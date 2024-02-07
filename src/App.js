import './App.css';
import React, { Suspense } from 'react';
import ColorTabs from './components/navBar';
import { Route, Routes } from 'react-router-dom';
import MasonryImageList from './redux/photoSlice'


const Home = React.lazy(() => import('./components/home'))
const Todo = React.lazy(() => import('./components/todo'))
const Post = React.lazy(() => import('./components/post'))
const Photo = React.lazy(() => import('./components/photo'))
const User = React.lazy(() => import('./components/user'))



function App() {
  return (<>
    <ColorTabs />
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Suspense fallback={<h1>loading..</h1>}><Home /></Suspense>}> */}
          <Route path='/' element={<Suspense fallback={<h1>loading..</h1>}><Home /></Suspense>} />
          <Route path='/todo' element={<Suspense fallback={<h1>loading..</h1>}><Todo /></Suspense>} />
          <Route path='/post' element={<Suspense fallback={<h1>loading..</h1>}><Post /></Suspense>} />
          <Route path='/photo' element={<Suspense fallback={<h1>loading..</h1>}><Photo /></Suspense>} />
          <Route path='/user' element={<Suspense fallback={<h1>loading..</h1>}><User /></Suspense>} />
        {/* </Route> */}
      </Routes>

    </div>
  </>
  );
}

export default App;
