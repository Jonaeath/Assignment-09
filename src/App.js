import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Home from './component/Home/Home';
import Statistics from './component/Statistics/Statistics';
import Topics from './component/Topics/Topics';
import Main from './Layout/Main';

function App() {
 
const router  = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
    {
       path:'/',
       loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
       element:<Home></Home>,
    },
    {
        path:'topics',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz/1'),
        element:<Topics></Topics>
    },
    {
      path:'statistics',
      element:<Statistics></Statistics>
    },
    {
      path:'blog',
      element:<Blog></Blog>
    }
   ]
  }
])
  return (
    <div>
      <RouterProvider
      router = {router}
      ></RouterProvider>
    </div>
  );
}

export default App;
