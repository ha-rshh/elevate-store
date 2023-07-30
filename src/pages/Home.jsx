import useProductsContext from '../hooks/useProductsContext';
import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import Product from '../components/Product';

function Products() {
  const { products, fetchProducts, searchFilterTerm } = useProductsContext();

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderedProducts = products
    .filter(product => product.title.toLowerCase().includes(searchFilterTerm))
    .map(product => (
      <Link to={`/products/${product.id}`} key={product.id} state={product}>
        <Product key={product.id} info={product} />
      </Link>
    ));

  return (
    <div className="prod-home">
      {renderedProducts.length ? (
        renderedProducts
      ) : (
        <h1 className="error">No Products Found ☹️</h1>
      )}
    </div>
  );
}

export default Products;
