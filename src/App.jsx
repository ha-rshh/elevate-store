import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';
import Layout from './layout/Layout';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products/:id', element: <ProductInfo /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
