import { useContext } from 'react';
import ProductsContext from '../context/ProductsContext';

const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default useProductsContext;
