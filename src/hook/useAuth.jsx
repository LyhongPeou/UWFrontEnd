import { useSelector } from 'react-redux';

const useAuth = () => {
  const { isAuthenticated, userData } = useSelector((state) => state.user);


  return {
    isAuthenticated,
    roles: userData?.role || [],
  };
};

export default useAuth;