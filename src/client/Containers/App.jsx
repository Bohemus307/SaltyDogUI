import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      phValues: [],
      ecValues: [],
      doValues: [],
    };
  }

  render() {
    return (
      <div>Hello react world</div>
    );
  }
}

export default App;
