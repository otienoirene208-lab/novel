import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Signup from './component/Signup';
import Signin from './component/Signin';
import Notfound from './component/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Makepayment from './component/Makepayment';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Mycarousel from './component/Carousel';
import Getproduct from './component/Getproducts';
import Addproduct from './component/Addproducts';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Novel sell online</h1>
      </header>

       {/* the navigation component */}
       <Navbar/>

        {/* carousel components] */}
        <Mycarousel/>

      <Routes>
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path='/signin'element={<Signin/>}/>
        <Route path='/addproduct'element={<Addproduct/>}/>
        <Route path='/makepayment'element={<Makepayment/>}/>
        <Route path='*'element={<Notfound/>}/>
        
      </Routes>

        {/* footer component */}
     <Footer/>

    </div>
    </Router>
  );
}

export default App;
