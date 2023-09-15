import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import store from './components/store/store'
import { Provider } from 'react-redux'
import ProtectedRoute from './components/pages/ProtectedRoute'

import { 
  AuthPage, 
  AdminDashboard, 
  MainDashboard, 
  StudentManagement, 
  SettingPage, 
  StudentDashboard, 
  MainStudentDashboard,
  FileManagement 
} from './components/index'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admin/dashboard",
        element: <ProtectedRoute component={<MainDashboard/>} roles={['admin']} />,
      },
      {
        path: "/admin/student_management",
        element: <ProtectedRoute component={<StudentManagement/>} roles={['admin']} />,
      },
      {
        path: "/admin/files",
        element: <ProtectedRoute component={<FileManagement/>} roles={['admin']} />,
      },
      {
        path: "/admin/setting",
        element: <ProtectedRoute component={<SettingPage/>} roles={['admin']} />,
      },
    ],
  },
  {
    path: "/student",
    element: <StudentDashboard />,
    children: [
      {
        path: "/student/dashboard",
        element: <ProtectedRoute component={<MainStudentDashboard/>} roles={['student']} />,
      },
      {
        path: "/student/setting",
        element: <ProtectedRoute component={<SettingPage/>} roles={['student']} />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)