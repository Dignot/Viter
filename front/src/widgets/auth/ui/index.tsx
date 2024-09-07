import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthorizationApi } from '../../../shared/api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../../providers/redux/userSlice';
import { RootState } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';
import { AuthorizationForm } from '../authorizationForm';
import { GetUser } from '../../../shared/api/UserApi';

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authorized = useSelector(
    (state: RootState) => state.userData.authorized
  );

  const [errors, setErrors] = useState('');

  const shema = {
    custom: Yup.object().shape({
      login: Yup.string().required('Пустое поле'),
      password: Yup.string().required('Пустое поле'),
      checked: Yup.boolean(),
    }),
  };

  useEffect(() => {
    if (authorized) {
      navigate('/');
    }
  }, [authorized]);

  return (
    <>
      <Formik
        validationSchema={shema.custom}
        initialValues={{ login: '', password: '', checked: false }}
        onSubmit={(values) => {
          console.log(values);
          AuthorizationApi(values)
            .then(() => GetUser().then((el) => dispatch(saveUser(el.data))))
            .catch((err) => setErrors(err.response.data.message));
        }}
      >
        <AuthorizationForm errors={errors} />
      </Formik>
    </>
  );
};
