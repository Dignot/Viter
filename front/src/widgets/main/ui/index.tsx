import { RootState } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetUser } from '../../../shared/api/UserApi';
import { RefApi } from '../../../shared/api/AuthApi';

export const Main = () => {
  const authorized = useSelector((state: RootState) => state.userData.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (authorized) {
      setInterval(() => RefApi(), 1080000);
    } else {
      navigate('/auth');
    }
  }, [authorized]);
  const Getdata = () => {
    GetUser();
  };
  return (
    <>
      <div>
        <h1>Hello</h1>
        <button onClick={() => Getdata()}>получить данные</button>
      </div>
    </>
  );
};
