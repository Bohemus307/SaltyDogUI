import React from 'react';

import classes from './DashBoard.css';
import Menu from '../../Components/Menu/Menu.jsx';

class DashBoard extends React.Component {
  constructor(props) {
    super();

    this.state = {

    };
  }

  logOutHandler = () => {
    const { setAuthTokens } = useAuth();
    setAuthTokens();
  }

  render() {

    return (
      <div className={classes.DashBoard}>
        <div className={classes.Menu_Div}>
          <Menu  logout={ this.logOutHandler } />
        </div>
        <div className={classes.Main_Div}>
          Main
        </div>
      
      </div>
    );
  }
}

export default DashBoard;
