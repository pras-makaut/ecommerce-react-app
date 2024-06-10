import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path : '/products',
    element : <ProductList />
  },
  {
    path : '/products/:id',
    element : <ProductDetail />
  }
]);

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
