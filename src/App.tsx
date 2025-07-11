
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"; 

import Presentation from './components/Presentation'
import ExpFormations from './components/ExpFormations'
import Projectspub from './components/Projectspub'
import RootLayout from './components/RootLayout';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      {
        index: true,
        element: <Presentation />,
      },
      {
        path: "ExpFormations",
        element: <ExpFormations />,
      },
      {
        path: "Projectspub",
        element: <Projectspub />,
      },
    ],
  },
]);

function App() {

  return (
    <>
    
      <RouterProvider router={router} />

    </>
  )
}

export default App
