import React from 'react';

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
      <div>dashboard for now...
      <button onClick={this.logOut}>Log out</button>
      </div>
    );
  }
}

export default DashBoard;
