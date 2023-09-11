import React from "react";
import useAuth from "../../hook/useAuth";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ roles, element, ...rest }) => {
  const { isAuthenticated, roles: userRoles } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
    return null;
  }

  if (roles && !roles.some((role) => userRoles.includes(role))) {
    navigate("/error");
    return null;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
