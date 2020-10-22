import React from 'react';

import classes from './DashBoard.css';

class DashBoard extends React.Component {
  constructor(props) {
    super();

    this.state = {

    };
  }

  logOut = () => {
    const { setAuthTokens } = useAuth();
    setAuthTokens();
  }

  render() {

    return (
      <div className={classes.DashBoard}>
        <div className={classes.Menu_Div}>
        <button onClick={this.logOut}>Log out</button>
          
        </div>
        <div className={classes.Main_Div}>
          Main
        </div>
      
      </div>
    );
  }
}

export default DashBoard;
