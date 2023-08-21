
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductList';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
   
   <Navbar></Navbar>
   <BrowserRouter>
   <Routes>
    <Route  path='/' exact Component={ProductList}/>
     <Route  path='/product/:productID' exact Component={ProductDetails}/>
   </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
