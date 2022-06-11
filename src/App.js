import './App.css';
import Header from './component/header';
import header from './css/header.css';
import Home from './component/pages/home';
import Rules from './component/pages/rules';
import Tos from './component/pages/tos';
import Commission from './component/pages/commission';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
<BrowserRouter>
   <Routes>
   <Route path='/' element = { <Home></Home>}/>
   <Route path='/Rules' element = {<Rules></Rules>}/>
   <Route path='/Tos' element = {<Tos></Tos>}/>
   <Route path='/commissions' element = {<Commission></Commission>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
