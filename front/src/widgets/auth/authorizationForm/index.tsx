import { Field, Form, ErrorMessage as Error } from 'formik';
import { Link } from 'react-router-dom';
import { authorizationProps } from './index.types';

export const AuthorizationForm = (props: authorizationProps) => {
  const { errors } = props;
  return (
    <Form>
      <Field name="login" placeholder="login" />
      <Error name="login" component={'span'} />
      <Field name="password" placeholder="password" />
      <Error name="password" component={'span'} />
      {errors}
      <button type="submit">Вход</button>
      <label>
        <Field type="checkbox" name="checked" />
        Запомнить меня
      </label>
      <Link to={'/register'}>Регистрация</Link>
    </Form>
  );
};
