import React, { FC, useEffect, useRef, ReactElement } from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.actions';
import { DocumentData } from '@firebase/firestore-types';

const Auth: FC<any> = ({ setCurrentUser }) => {
  const unsubscribeFromAuthRef = useRef(() => {});
  useEffect(() => {
    unsubscribeFromAuthRef.current = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef?.onSnapshot((snapShot) => {
            console.log('Auth: snapshot: ', snapShot, snapShot.data());
            const { createdAt, displayName, email } =
              snapShot.data() as DocumentData;
            setCurrentUser({
              id: snapShot.id,
              currentUser: snapShot.id,
              createdAt,
              displayName,
              email,
            });
          });
        }
        setCurrentUser(userAuth);
      }
    );
    return () => {
      unsubscribeFromAuthRef?.current();
    };
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: UserReducerType) => {
    console.log('[setCurrentUser] dispatch', user);
    dispatch(setCurrentUser(user));
  },
});

export default connect(null, mapDispatchToProps)(Auth);
