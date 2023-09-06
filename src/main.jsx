import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthPage, AdminDashboard, MainDashboard, StudentManagement, DocumentManagement } from './components/index'





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
    path: "/admin/document_mangement",
    element: <DocumentManagement />
  }


  ]
}


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
