import React from 'react';

import classes from './DashBoard.css';
import Menu from '../../Components/Menu/Menu.jsx';
import Main from '../../Components/Main/Main.jsx';

class DashBoard extends React.Component {
  constructor(props) {
    super();

    this.state = {
      open: false,
      value: 'Overview',
    };
  }

  logOutHandler = () => {
    const { setAuthTokens } = useAuth();
    setAuthTokens();
  }

  menuClickHandler = (value) => {
    this.setState({
      open: true,
      value: value,
    })
  }

  render() {
    return (
      <div className={classes.DashBoard}>
        <div className={classes.Menu_Div}>
          <Menu  displayItem={ this.menuClickHandler } />
        </div>
        <div className={classes.Main_Div}>
          <Main displayItem={this.state.value} />
        </div>
      
      </div>
    );
  }
}

export default DashBoard;
