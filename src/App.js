import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import './App.css';
import HomeLayout from './Layouts/HomeLayout'
import Home from './pages/Home'


const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<HomeLayout/>}>
          <Route path='Home' element={<Home/>}/>

      </Route>
    )
)



function App() {
  return (
 
    <RouterProvider router={router}/>
   
  );
}

export default App;
