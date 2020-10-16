import React from 'react';
import { Input } from '../UI/Input/Input.jsx';

import classes from './Auth.css';

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
      <div className={classes.body} id="login">
        <form name="form-login">
          <span className={classes.fontawesome_user} />
          <input type="text" id="user" placeholder="Username" />
          <span className={classes.fontawesome_lock} />
          <input type="password" id="password" placeholder="Password" />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Auth;
