import React from 'react';
// import { Input } from '../UI/Input/Input.jsx';

import classes from './Auth.css';
import Logo from '../Logo/Logo.jsx';

class Auth extends React.Component {
  constructor() {
    super();

    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email Address',
          },
          value: '',
          validation: {
            required: true,
            isEmail: true,
          },
          valid: false,
          touched: false,
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'password',
            placeholder: 'Password...',
          },
          value: '',
          validation: {
            required: true,
            minLength: 7,
          },
          valid: false,
          touched: false,
        },
      },
    };
  }

  render() {
    const { controls } = this.state;
    const keys = Object.keys(controls);
    const values = Object.values(controls);

    const formElementsArray = keys.reduce((obj, key, idx) => {
      let object = obj;
      object = {
        id: object[key],
        config: values[idx],
      };
      return object;
    }, {});

    return (
      <div className={classes.Auth}>
        <div className={classes.Logo_Div}>
          <Logo />
          <span className={classes.Salty_Label}>Salty Dog Salinity Sensor</span>
        </div>
        <div id="login">
          <form name="form-login">
            <span />
            <input type="text" id="user" placeholder="Username" />
            <span />
            <input type="password" id="password" placeholder="Password" />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
