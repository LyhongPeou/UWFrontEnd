import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthPage, AdminDashboard, MainDashboard, StudentManagement, SettingPage } from './components/index'
import store from './components/store/store'

import { Provider } from 'react-redux'





const router = createBrowserRouter([{
  path: "/",
  element: <AuthPage />
},

{
  path: "/admin",
  element: <AdminDashboard />,
  children: [{
    path: "/admin/dashboard",
    element: <MainDashboard />
  },

  {
    path: "/admin/student_management",
    element: <StudentManagement />
  },

  {
    path: "/admin/setting",
    element: <SettingPage />
  }

  ]
}


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
