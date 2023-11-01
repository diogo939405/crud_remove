import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HomeLayout from './Layouts/HomeLayout'
import Home from './pages/Home'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<HomeLayout/>}>
          <Route path="Home" element={<Home/>}/>
          <Route index element={<Home/>}/>
      </Route>
    )
)



function App() {
  return (
 
    <RouterProvider router={router}/>
   
  );
}

export default App;
