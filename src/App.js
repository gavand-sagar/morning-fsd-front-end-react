import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CatFacts from './Pages/CatFact/CatFacts';
import Login from './Pages/Login/Login';
import PostList from './Pages/PostList/PostList';
import MyButton from './Shared/Components/MyButton';
import Rating from './Shared/Components/Rating';
function App() {

  return (
    <div className="App">

     
      <div>
        <Routes>
          <Route path='/posts-list' element={<PostList />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cat-fact' element={<CatFacts />} />
          <Route path='/' element={<Navigate to={'/login'} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
