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
  NotFound
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
                <ProtectedRoute element={<MainDashboard />} roles={["admin"]} />
              }
            />
          </Routes>
        ),
      },
      {
        path: "/admin/student_management",
        element: <ProtectedRoute component={<StudentManagement/>} roles={['admin']} />,
      },
      {
        path: "/admin/students/:studentID",
        element: <ProtectedRoute component={<StudentInfo/>} roles={['admin']} />,
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
                <ProtectedRoute element={<SettingPage />} roles={["admin"]} />
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
        element: <ProtectedRoute component={<RequirementDashboard/>} roles={['student']} />,
      },
      {
        path: "/student/setting",
        element: (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute element={<SettingPage />} roles={["student"]} />
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
