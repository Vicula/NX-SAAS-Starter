/**
 ==============================================================================
 * @file   pages/login
 * @brief  the login page where we are using the register and login hooks
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */

import { trpc } from '../../../utils/trpc';
import { createUserSchema, loginUserSchema } from '@nx-saas/data-library';
import { useRef } from 'react';
import styles from './Login.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const textInput = useRef(null),
    passInput = useRef(null),
    register = trpc.Users.RegisterUser.useMutation(),
    login = trpc.Users.FetchUser.useMutation();

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    /**
     * TODO:
     * Go and edit the type declartions to include value
     */
    const data = {
      /* eslint-disable-next-line */
      // @ts-ignore
      email: textInput.current.value,
      /* eslint-disable-next-line */
      // @ts-ignore
      password: passInput.current.value,
    };

    /**
     * TODO:
     * Go and edit the type declartions to include submitter
     */
    /* eslint-disable-next-line */
    // @ts-ignore
    if (ev.nativeEvent.submitter.name === 'register') {
      register.mutate(
        await createUserSchema.validate(createUserSchema.cast(data))
      );
    } else {
      login.mutate(await loginUserSchema.validate(loginUserSchema.cast(data)));
    }
  };

  return (
    <div className={styles['login']}>
      <form onSubmit={onSubmit}>
        <h1>Login/Register</h1>

        <input type="email" name="email" placeholder="Email" ref={textInput} />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passInput}
        />
        <div className={styles['buttonCont']}>
          <button type="submit" name="register">
            Register
          </button>
          <button type="submit" name="login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
