
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './components/mainLayout';
import Home from './pages/home';

function App() {
    const Routing = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,

      children: [
        { index: true, element: <Home /> },

      ],
    },
  ]);
  return (
      <RouterProvider router={Routing} />
  );
}

export default App;
