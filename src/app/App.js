import './app.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from '../header/Header';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Buy from '../pages/Buy';
import Page404 from '../pages/404';
import Footer from '../footer/Footer';
import OneCar from '../pages/OneCar';


function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/buy' element={<Buy />}></Route>
          <Route path='*' element={<Page404 />}></Route>
          <Route path='/car/:marca' element={<OneCar />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
