import css from "./ErrorMessage.module.css";
import { FC } from 'react';

export const ErrorMessage: FC = () => {
  return <p className={css.text}>Oops... Something wrong.. Try again.</p>;
}