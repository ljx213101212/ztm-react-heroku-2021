import { SyntheticEvent } from 'react';
import { auth } from '../firebase/firebase.utils';

const signinHandler = async (event: Event): Promise<any> => {
  const { email, password } = (event as any).detail;
  console.log('[JX TEST] - signinHandler', event);
  await auth.signInWithEmailAndPassword(email, password);
};

const signoutHandler = (event: Event): void => {
  console.log('[USER ACTION]: SIGN_OUT', event);
  auth.signOut();
};

export const addWindowEventListeners = (): void => {
  window.addEventListener(
    'SIGN_IN_BY_EMAIL',
    (event: Event) => {
      signinHandler(event);
    },
    true
  );
  window.addEventListener('SIGN_OUT', signoutHandler, true);
};

export const removeWindowListener = (): void => {
  window.removeEventListener('SIGN_IN_BY_EMAIL', () => signinHandler);
  window.removeEventListener('SIGN_OUT', () => signoutHandler);
};
