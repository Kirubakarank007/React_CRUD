import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inventory from './Components/getInventoryItem/inventory';

function App() {

  const route=createBrowserRouter([
    {
      path:'/',
      element:<Inventory/>
    },
    {
      path:'/add',
      element:"Inventory add page"
    },
    {
      path:'/edit',
      element:"Inventory edit page"
    } 

  ])

  return (
    <div className="App">
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
