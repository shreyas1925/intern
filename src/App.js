import React, { useState, useEffect } from 'react'
import "./App.css"
import Restaurant from './components/Restaurants'
import Pickup from './components/Pickup'
import Map from './components/Map'
import Home from './screens/Home'
// import Nav from "./ecommerce/components/Navbar/Nav"
// import { commerce } from "./ecommerce/lib/comm"
// import Products from "./ecommerce/components/Products/Products"

const App = () => {

  // const [products, setProducts] = useState([])

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data)
  // }

  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // console.log(categories);

  return (
    <>
      {/* <h1>hi</h1> */}
      {/* <Nav /> */}
      <Home />
      {/* <Home categories={categories} /> */}
      {/* <Products products={products} /> */}
    </>
  )
}

export default App