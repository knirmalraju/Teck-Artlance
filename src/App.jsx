import Careers from "./pages/Careers";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import Jobapp from "./pages/Jobapp";
import Mobilegames from "./pages/Mobilegames";
import Publishwithus from "./pages/Publishwithus";
import PCgames from "./pages/PCgames";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Enquiries from "./pages/Enquiries";

/*<Route path="/products/:category" element={<ProductList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />    
      <Route path="/signup" element={user ? <Navigate to="/"/> : <Signup/>} />
      <Route path="/pay" element={<Pay/>}/>
      <Route path="/success" element={<Success/>}/>
*/
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/Mobilegames" element={<Mobilegames/>}/>
      <Route path="/Pcgames" element={<PCgames/>}/>
      <Route path="/Careers" element={<Careers/>}/>
      <Route path="/Publishwithus" element={<Publishwithus/>}/>
      <Route path="/Contactus" element={<Contactus/>}/>
      <Route path="/Careers/:jobtype" element={<Jobapp/>}/>
      <Route path="/Contactus/:enquiries" element={<Enquiries/>}/>
    </Routes>
  </BrowserRouter>
  )
};

export default App;