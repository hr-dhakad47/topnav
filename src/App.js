import logo from './logo.svg';
import './App.css';
import TopNav from './Component/Topnav';
import {Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Order from './Component/Order';
import Product from './Component/Product';
import AddCard from './Component/AddCard';
import Contact from './Component/Contact';
import Service from './Component/Service';
import Products from './Component/Products';

function App() {
  return (
  <div>
    <Routes> 
    
      <Route path="/" element={<TopNav/>}>
          <Route path="Home"  element={<Home/>}/>
          <Route path="Order"  element={<Order/>}/>
          <Route path="Product"  element={<Product/>}/>
          <Route path="Products"  element={<Products/>}/>
          <Route path="AddCard"  element={<AddCard/>}/>
          <Route path="Contact"  element={<Contact/>}/>
          <Route path="Service"  element={<Service/>}/>

      </Route>
      {/* <Route path="/no" element={<div>no</div>}/> */}
     


      </Routes>
  </div>
  );
}

export default App;