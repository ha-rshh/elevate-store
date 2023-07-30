import { createContext, Provider, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [searchFilterTerm, setSearchFilterTerm] = useState('');
  console.log(searchFilterTerm);

  const fetchProducts = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const data = response.data;

    setProducts(data);
  };

  const handleFilterChange = e => {
    setSearchFilterTerm(e.target.value.toLowerCase());
  };

  const valueToShare = {
    products,
    fetchProducts,
    searchFilterTerm,
    handleFilterChange,
  };

  return (
    <ProductsContext.Provider value={valueToShare}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
export { ProductsProvider };
