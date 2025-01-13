import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return goBack;
};
