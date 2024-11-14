import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inventory from './Components/getInventoryItem/Inventory.jsx';
import AddItem from './Components/addInventoryItem/AddItem.jsx';
import EditItem from './Components/updateInventoryItem/EditItem.jsx';

function App() {

  const route=createBrowserRouter( [
    {
      path:'/',
      element:<Inventory/>
    },
    {
      path:'/add',
      element:<AddItem/>
    },
    {
      path:'/edit/:id',
      element:<EditItem/>
    }   
  ],
 { future: {
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_skipActionErrorRevalidation: true,
    v7_partialHydration:true,
    v7_startTransition:true,
    v7_fetcherPersist:true,
  },}
  );

  return (
    <div className="App">
      <RouterProvider  router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
