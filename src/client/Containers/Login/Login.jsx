import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../../Components/Context/Auth.jsx";
import { login} from '../../Components/Auth/auth';

import classes from './Login.css';
import Logo from '../../Components/Logo/Logo.jsx';
import Input from '../../Components/UI/Input/Input.jsx';
import Spinner from '../../Components/UI/Spinner/Spinner.jsx';

class Login extends React.Component {
  constructor(props) {
    super();

    this.state = {
      controls: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Email Address',
            image: "/images/id-card.png",
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
            image: "/images/password.png",
          },
          value: '',
          validation: {
            required: true,
            minLength: 7,
            maxLength: 12,
          },
          valid: false,
          touched: false,
        },
      },
      formIsValid: false,
      loading: false,
      isLoggedIn: false,
      authToken: null,
      isError: false
    };
  }


  // rules for input content
  checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedLoginForm = { 
      ...this.state.controls 
    };
    // deeper clone of login form
    const updatedFormELement = { 
      ...updatedLoginForm[inputIdentifier] 
    };
    updatedFormELement.value = event.target.value;
    updatedFormELement.valid = this.checkValidity(updatedFormELement.value, updatedFormELement.validation);
    updatedFormELement.touched = true;
    updatedLoginForm[inputIdentifier] = updatedFormELement;
    
   let formIsValid = true;
    for (let inputIdentifiers in updatedLoginForm) {
      formIsValid = updatedLoginForm[inputIdentifier].valid && formIsValid
    }

    this.setState({
      controls: updatedLoginForm,
      formIsValid: formIsValid
    });
  }

  loginHandler = ( event ) => {
    event.preventDefault()
    // request 
    //this.setState({ loading: true })

    const formData = {};
    for (let formElementIdentifier in this.state.controls) {
      formData[formElementIdentifier] = this.state.controls[formElementIdentifier].value;
    }

    console.log(formdata)

    const email = formData.email;
    const password = formData.password
    login(email, password).then((ok) => {
      if (ok) {
        this.setState({ isloggedIn: true });
        this.router.history.push('/dashboard');
      } else {
        this.setState({
          isError: true
        })
      }
    })

  }


  render() {
  
    const { controls } = this.state;
    const keys = Object.keys(controls);
    const values = Object.values(controls);

    // array of objects from controls in state
    const formElementsArray = keys.reduce((arr, key, idx) => {
      const object = {
        id: key,
        config: values[idx],
      };
      arr.push(object);
      return arr;
    }, []);
    // login form
    let form = (
      <form name="form-login" className={classes.Form} onSubmit={this.loginHandler}> 
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            label={formElement.config.elementConfig.image}
          />
        ))}
        {/* <input type="submit" value="Login" /> */}
        <button type="submit" disabled={!this.state.formIsValid}>Login</button>
      </form>
    );
    //if loading 
    const { loading } = this.state;
    if (loading) {
      form = <Spinner />;
    }
  
    // const referer = this.props.location.state.referer || '/';
    // // if not logged in
    // let { isLoggedIn } = this.state
    // if (isLoggedIn) {
    //   return <Redirect to={referer} />;
    // }
  
    return (
      <div className={classes.Auth}>
        <div className={classes.Logo_Div}>
          <Logo  height="300px" />
          <span className={classes.Salty_Label}>Heron Farms</span>
        </div>
        <div className={classes.Login}>
        {form}
        </div>
        <NavLink className={classes.Signup} to="/signup">Don't have an account?</NavLink>
      </div>
    );
  }
}

export default Login;
