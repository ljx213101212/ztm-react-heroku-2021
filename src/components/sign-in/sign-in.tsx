import React, { FormEvent, ReactElement, SyntheticEvent } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component<any, SignInStates> {
  constructor(props: any) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log('[JX TEST] SignIn1', event);
    const signInEvent = new CustomEvent('SIGN_IN_BY_EMAIL', {
      detail: {
        timerTick: new Date().getTime(),
        email,
        password,
      },
    });
    window.dispatchEvent(signInEvent);
    this.setState({ email: '', password: '' });
  };

  handleChange = (event: FormEvent): void => {
    const { value, name } = event.target as HTMLTextAreaElement;

    this.setState({ [name]: value } as unknown as SignInStates);
  };

  render(): ReactElement {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
