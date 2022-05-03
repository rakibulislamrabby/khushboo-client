import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Authentication/Login/Login';
import Register from './component/Authentication/Register/Register';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Shared/Footer/Footer';
import NotFoundPage from './component/Shared/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
