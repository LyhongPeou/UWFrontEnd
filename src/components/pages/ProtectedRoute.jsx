import React, { useEffect } from "react";
import useAuth from "../../hook/useAuth";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ roles, element }) => {
  const { isAuthenticated, roles: userRoles } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else if (roles && !roles.some((role) => userRoles.includes(role))) {
      navigate("/error");
    }
  }, [isAuthenticated, userRoles, roles, navigate]);

  return element;
};

export default ProtectedRoute;