import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inventorys from './Components/getInventoryItem/Inventory.jsx';

function App() {

  const route=createBrowserRouter([
    {
      path:'/',
      element:<Inventorys/>
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
