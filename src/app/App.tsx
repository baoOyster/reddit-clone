import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Root from '../components/Root/Root'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Root />}>

    </Route>
  ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App
