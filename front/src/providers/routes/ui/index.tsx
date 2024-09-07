import { Route, Routes } from 'react-router-dom';
import { AuthorizationPage } from '../../../pages/AuthorizationPage';
import { MainPage } from '../../../pages/MainPage';
import { Register } from '../../../widgets/register';
export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/auth" element={<AuthorizationPage />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};
