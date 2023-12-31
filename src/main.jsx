import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from "./components/store/store";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/pages/ProtectedRoute";

import { 
  AuthPage, 
  AdminDashboard, 
  MainDashboard, 
  StudentManagement, 
  SettingPage, 
  StudentDashboard, 
  RequirementDashboard,
  FileManagement,
  StudentInfo,
  NotFound,
  MoveBack
} from './components/index'

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
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
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute 
                  element={<MainDashboard />} 
                  roles={["admin"]} 
                />
              }
            />
          </Routes>
        ),
      },
      {
        path: "/admin/students",
        element: (
          <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedRoute 
                  element={<StudentManagement />} 
                  roles={['admin']} 
                />
              } 
            />
          </Routes>
        )
      },
      {
        path: "/admin/students/:studentID",
        element: (
          <Routes>
            <Route 
              path="/" 
              element={
                <ProtectedRoute 
                element={<StudentInfo/>} 
                roles={['admin']} 
                />
              } 
            />
          </Routes>
        )
      },
      {
        path: "/admin/students/404",
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute 
                  element={<MoveBack />} 
                  roles={["admin"]} 
                />
              }
            />
          </Routes>
        ),
      },
      {
        path: "/admin/files",
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  element={<FileManagement />}
                  roles={["admin"]}
                />
              }
            />
          </Routes>
        ),
      },
      {
        path: "/admin/setting",
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute 
                  element={<SettingPage />} 
                  roles={["admin"]} 
                />
              }
            />
          </Routes>
        ),
      },
    ],
  },
  {
    path: "/student",
    element: <StudentDashboard />,
    children: [
      {
        path: "/student/dashboard",
        element: 
          <ProtectedRoute  
            component={
              <RequirementDashboard/>} 
              roles={['student']} 
          />,
      },
      {
        path: "/student/setting",
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute 
                  element={<SettingPage />} 
                  roles={["student"]} 
                />
              }
            />
          </Routes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
