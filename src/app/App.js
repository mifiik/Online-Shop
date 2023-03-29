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


function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/Buy' element={<Buy />}></Route>
          <Route path='*' element={<Page404 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
