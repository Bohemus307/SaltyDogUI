import React, { Suspense } from 'react';

import classes from './DashBoard.css';
import ErrorBoundary from '../../Components/Error Boundary/ErrorBoundary.jsx';
// import Menu from '../../Components/Menu/Menu.jsx';
// import Main from '../../Components/Main/Main.jsx';

const Menu = React.lazy(() => import('../../Components/Menu/Menu.jsx'));
const Main = React.lazy(() => import('../../Components/Main/Main.jsx'));

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
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Menu  displayItem={ this.menuClickHandler } />
            </Suspense>
          </ErrorBoundary>
        </div>
        <div className={classes.Main_Div}>
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <Main displayItem={this.state.value} />
            </Suspense>
          </ErrorBoundary>
        </div>
      
      </div>
    );
  }
}

export default DashBoard;
