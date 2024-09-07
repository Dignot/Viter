import { registerProps } from './index.types';
import { Field, Form, ErrorMessage as Error } from 'formik';

export const RegisterForm = (props: registerProps) => {
  const { errors } = props;
  return (
    <Form>
      <Field name="login" placeholder="Введите логин" />
      <Error name="login" component={'span'} />

      <Field name="password" placeholder="Введите пароль" />
      <Error name="password" component={'span'} />

      <Field name="firstname" placeholder="Введите имя" />
      <Error name="firstname" component={'span'} />

      <Field name="email" placeholder="Введите почту" />
      <Error name="email" component={'span'} />

      <button type="submit">Регистраиця</button>
      {errors}
    </Form>
  );
};
