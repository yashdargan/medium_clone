import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Membership from './Pages/Membership/index.tsx'
import OurStory from './Pages/OurStory/index.tsx'
import Write from './Pages/Write/index.tsx'
import Signin from './Pages/Signin/index.tsx'
import Front from './Pages/Front/index.tsx'
import Errorpage from './Pages/Error/index.tsx'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    element:<App/>,
    errorElement:<Errorpage/>,
    children:[
       {
         path:"/",
        element:<Front />
      },
      {
        path:"/membership",
        element:<Membership/>
      },
      {
        path:"/ourstory",
        element:<OurStory />
      },
      {
        path:"/write",
        element:<Write />
      },
      {
        path:"/signin",
        element:<Signin />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
