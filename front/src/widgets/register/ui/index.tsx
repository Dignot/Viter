import { Formik } from 'formik';
import * as Yup from 'yup';
import { RegisterApi } from '../../../shared/api/RegisterApi';
import { RegisterForm } from './registerForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const shema = {
    custom: Yup.object().shape({
      login: Yup.string().required('Пустое поле'),
      password: Yup.string().required('Пустое поле'),
      firstname: Yup.string().required('Пустое поле'),
      email: Yup.string()
        .required('Пустое поле')
        .email('Неверный формат почты'),
    }),
  };

  return (
    <>
      <Formik
        validationSchema={shema.custom}
        initialValues={{ login: '', password: '', firstname: '', email: '' }}
        onSubmit={(values) => {
          RegisterApi(values)
            .then(() => navigate('/auth'))
            .catch((err) => setErrors(err.response.data.message));
        }}
      >
        <RegisterForm errors={errors} />
      </Formik>
    </>
  );
};
