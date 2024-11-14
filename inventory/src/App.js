import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inventory from './Components/getInventoryItem/inventory.jsx';
import AddItem from './Components/addInventoryItem/addItem.jsx';

function App() {

  const route=createBrowserRouter([
    {
      path:'/',
      element:<Inventory/>
    },
    {
      path:'/add',
      element:<AddItem/>
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
