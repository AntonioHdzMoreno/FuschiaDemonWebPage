import './App.css';
import Header from './component/header';
import header from './css/header.css';
import Home from './component/pages/home';
import Rules from './component/pages/rules';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
   <Routes>
   <Route path='/' element = { <Home></Home>}/>
  <Route path='/Rules' element = {<Rules></Rules>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
