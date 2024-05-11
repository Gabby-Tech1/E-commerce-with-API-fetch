import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import CategoryFilter from './Components/CategoryFilter'
import ProductList from './Components/ProductList'

const App = () => {
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState('')
  const [cartsCount, setCartsCount] = useState(0) // New state variable to track carts count


  const dataFetch = async () => {
    try {
      const productResponse = await fetch('https://dummyjson.com/products');
      const productData = await productResponse.json()
      setProducts(productData.products)

      const categoryResponse = await fetch('https://dummyjson.com/products');
        const categoryData = await categoryResponse.json();
        
        // Extract unique categories from the fetched data
        const uniqueCategories = [...new Set(categoryData.products.map(product => product.category))];
        setCategories(uniqueCategories);

      const cartResponse = await fetch('https://dummyjson.com/products');
      const cartData = await cartResponse.json()
      setCartItemsCount(cartData.cartItemsCount)
  }
    catch(err){
      console.error('Error fetching data:', err)
    }
  }

  useEffect(() => {
      dataFetch()
    }, [])

    const filteredProducts = selectedCategories ? products.filter((product)=> product.categories === selectedCategories)
    : products


    const handleAddToCart = () => {
      setCartsCount(prevCartsCount => prevCartsCount + 1); // Update carts count when adding to cart
    }

    const handleCategoryFilter = async (category) => {
      try {
        const productResponse = await fetch(`https://dummyjson.com/products/category/${category}`);
        console.log(productResponse)
        const productData = await productResponse.json()
        setProducts(productData.products)
    }
      catch(err){
        console.error('Error fetching data:', err)
      }
    }

    const handleRemoveFromCart = (product) => {
      const updatedProducts = products.map((p) =>
        p.id === product.id? {...p, cartsCount: p.cartsCount - 1 } : p
      );
      setProducts(updatedProducts);

      setCartsCount(prevCartsCount => prevCartsCount - 1);
    };
  return (
    <div>
      <Navbar cartItemsCount={cartItemsCount} cartsCount={cartsCount}/>
      <CategoryFilter categories={categories} onSelectCategory={handleCategoryFilter}/>
      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart}/>
    </div>
  )
}

export default App