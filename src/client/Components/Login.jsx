import React from 'react';
import { useHistory, useLocation} from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div id="login">
      <form name='form-login'>
        <span class="fontawesome-user"></span>
        <input type="text" id="user" placeholder="Username" />
        <span class="fontawesome-lock"></span>
        <input type="password" id="pass" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
    
  );
}

export default Login;
